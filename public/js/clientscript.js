
function removeErrorClass(id){
	$("#"+id).removeClass('errorInput');
}
       
        
        function clientmodule($scope, $http) {
        	var roleid = localStorage.getItem("roleid");
        	if(roleid == "2" || roleid == "3"){
        		$("#tdgetdetails").hide();
        		$("#graphContent").show();
        		 $("#tdsearch").hide();
                	$("#tdadd").hide();           	
                	$("#tdedit").show();
                	$("#tddelete").hide();
                	$("#tdsearchBorder").hide();
                	$("#tddetailsBorder").hide();
                	$("#tdaddBorder").hide();
                	$("#tdeditBorder").show();
                	$("#divClientDetails").hide();                	
                    $("#theadClientDetails1").hide();
                	$("#theadClientDetails2").hide();
                	$("#divclienthide").hide();
                	$("#gridPagingHide").hide();
                	$("#pageControlhide").hide();
                	$("#selectClientId").hide();
                	
        	}
        	else{
        		$("#tddashboard").hide();
        		$("#tddarshBoardBorder").hide();
        		$("#graphContent").hide();
        		$("#tableclientmodule").show();        		
        	}
        	
        	if(roleid ==  "2"){
        		$("#tddashboard").css('background-color', '#ffe4b2');
               	$("#tdedit").css('background-color', '#fff');  
        	}
         
        	 $scope.recordCount = {
     		        data: [{
     		            value: '10',
     		            name: '10'
     		        }, {
     		            value: '20',
     		            name: '20'
     		        },{
     		            value: '50',
     		            name: '50'
     		        },{
     		            value: '100',
     		            name: '100'
     		        }]
     		    };       
     		    $scope.noofrecordsDetails = '10';
     		    $scope.noofrecordsDelete = '10';
     		    $scope.noofrecordsSearch = '10';
     		   $scope.noofrecordsforalert = '10';
     		    $("#divClientAdd").hide();
           	 	$("#divClientUpdate").hide();
            	$("#divClientDelete").hide();
             	$("#divClientDetails").show();
             	$("#divClientSearch").hide(); 
             	$("#tddelete").css('background-color', '#fff');
            	$("#tdadd").css('background-color', '#fff');
            	$("#tdedit").css('background-color', '#fff');
            	$("#tdgetdetails").css('background-color', '#ffe4b2');
            	$("#tdsearch").css('background-color', '#fff');
            	
            	if(roleid == "1"){
            		var records = $scope.noofrecordsDetails;
                	   var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
                    $http({
                        method: 'GET',
                        url: url
                    }).success(function(response){
                        if(response.value.error == false){
                            $scope.clientGrid = response.value.result[0];
                            insertPaging(response.value.result[1][0].TotalRows, 3, $scope.noofrecordsDetails);
                        }
                        else{
                            alert(response.value.message);
                        }
                    }).error(function(err){
                        alert(err.value.message);
                    });
                    
                    var url = "/api/client/getallclients";
                    $http({
                        method: 'GET',
                        url: url
                    }).success(function(response){
                        if(response.value.error == false){
                            $scope.clients = response.value.result[0];
                            //$scope.clientsAdd = 1;
                            $scope.clientsEdit = response.value.result[0].ClientId;
                        }
                        else{
                            alert(response.value.message);
                        }
                    }).error(function(err){
                        alert(err.value.message);
                    });
            	}
            	else if(roleid == "2"){
            		
            		var records = $scope.noofrecordsforalert;                	
                	var url = "/api/client/getalertsforclient/NoofRecords/"+records+"/pageoffset/0";
                    $http({
                        method: 'GET',
                        url: url
                    }).success(function(response){
                        if(response.value.error == false){
                        	if(response.value.result[0] != undefined){
                                $scope.clientalertgrid = response.value.result[0];
                                insertPaging(response.value.result[1][0].TotalRows, 5, $scope.noofrecordsforalert);                        		
                        	}
                        	else{
                                $scope.clientalertgrid = response.value.result[0];
                                insertPaging(0, 5, $scope.noofrecordsforalert);                        		
                        	} 
                        }
                        else{
                            alert(response.value.message);
                        }
                    }).error(function(err){
                        alert(err.value.message);
                    });
            		
            		
             	   var url = "/api/client/loadclientsonuserid";
	                 $http({
	                     method: 'GET',
	                     url: url
	                 }).success(function(response){
	                     if(response.value.error == false){
	                         $scope.buildingsclient = response.value.result[0];
	                         $scope.darshboardClientDisplay = 1;
	                         
	                         var url = "/api/client/getbuildingrecords/clientId/" + $scope.darshboardClientDisplay;
	    	                 $http({
	    	                     method: 'GET',
	    	                     url: url
	    	                 }).success(function(response){
	    	                     if(response.value.error == false){
	    	                         $scope.dashboardbuildings = response.value.result[0];
	    	                     }
	    	                     else{
	    	                         alert(response.value.message);
	    	                     }
	    	                 }).error(function(err){
	    	                     alert(err.value.message);
	    	                 });
	                     }
	                     else{
	                         alert(response.value.message);
	                     }
	                 }).error(function(err){
	                     alert(err.value.message);
	                 });
            	}
     		   
            	
            	$scope.reloadbuildings = function(){
            		var url = "/api/client/getbuildingrecords/clientId/" + $scope.darshboardClientDisplay;
	                 $http({
	                     method: 'GET',
	                     url: url
	                 }).success(function(response){
	                     if(response.value.error == false){
	                         $scope.dashboardbuildings = response.value.result[0];
	                     }
	                     else{
	                         alert(response.value.message);
	                     }
	                 }).error(function(err){
	                     alert(err.value.message);
	                 });
            	};
            	
            	$scope.getlatandlong = function(){
            		var url = "/api/client/getlatlongdetails/buildingId/" + $scope.darshboardDisplay;
	                 $http({
	                     method: 'GET',
	                     url: url
	                 }).success(function(response){
	                     if(response.value.error == false){
	                    	 var result = [];
	                    	 var temp = "";
	                         for(var i = 0; i < response.value.result[0].length; i++){
	                        	 var location = [];
	                        	 if(response.value.result[0][i].latitude != null && response.value.result[0][i].longitude != null){
	                        		 location.push(response.value.result[0][i].guardid);
	                        		 location.push(response.value.result[0][i].latitude);
	                        		 location.push(response.value.result[0][i].longitude);
	                        		 location.push(parseInt(i) + 1);
		                        	 result.push(location);
	                        	 }
	                         }
	                         loadgooglemaps(result)
	                     }
	                     else{
	                         alert(response.value.message);
	                     }
	                 }).error(function(err){
	                     alert(err.value.message);
	                 });
            	};
     		    
                 
               $scope.dashboardclient = function(){
            		$("#graphContent").show();           		          	
            		$("#divClientUpdate").hide();
            	  	var html = 'Home <span style="padding-left: 2px"><a href="#">';
                   	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
                   	html += ' <span style="padding-left: 2px"><a href="#">';
                   	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Dashboard';
                   	$(".BreadCrumColumn")[0].innerHTML = html;                   	
                   	$("#tddashboard").css('background-color', '#ffe4b2');
                   	$("#tdedit").css('background-color', '#fff');  
                   	var records = $scope.noofrecordsforalert;                	
                	var url = "/api/client/getalertsforclient/NoofRecords/"+records+"/pageoffset/0";
                    $http({
                        method: 'GET',
                        url: url
                    }).success(function(response){
                        if(response.value.error == false){
                            $scope.clientalertgrid = response.value.result[0];
                            insertPaging(response.value.result[1][0].TotalRows, 5, $scope.noofrecordsforalert); 
                        }
                        else{
                            alert(response.value.message);
                        }
                    }).error(function(err){
                        alert(err.value.message);
                    });
                   	
                   	var url = "/api/client/loadclientsonuserid";
	                 $http({
	                     method: 'GET',
	                     url: url
	                 }).success(function(response){
	                     if(response.value.error == false){
	                         $scope.buildingsclient = response.value.result[0];
	                         $scope.darshboardClientDisplay = 1;
	                         
	                         var url = "/api/client/getbuildingrecords/clientId/" + $scope.darshboardClientDisplay;
	    	                 $http({
	    	                     method: 'GET',
	    	                     url: url
	    	                 }).success(function(response){
	    	                     if(response.value.error == false){
	    	                         $scope.dashboardbuildings = response.value.result[0];
	    	                     }
	    	                     else{
	    	                         alert(response.value.message);
	    	                     }
	    	                 }).error(function(err){
	    	                     alert(err.value.message);
	    	                 });
	                     }
	                     else{
	                         alert(response.value.message);
	                     }
	                 }).error(function(err){
	                     alert(err.value.message);
	                 });
               }
               
               $scope.searchclient = function(){
               	$("#divClientAdd").hide();
               	//search model 
               	$scope.nameSearch = undefined;
    			$scope.addressSearch = undefined;
    			$scope.surnameSearch = undefined;
    			$scope.citySearch = undefined;
    			$scope.contactnumberSearch = undefined;
    			$scope.stateSearch = undefined;
    			$scope.emailSearch = undefined;
    			$scope.startdateSearch = undefined;
    			$scope.enddateSearch = undefined;
    			$scope.ssnSearch = undefined;
               	$("#divsearchgrid").hide();
               	$("#graphContent").hide();
               	$("#divClientDetails").hide();
               	$("#divClientUpdate").hide();
               	$("#divClientDelete").hide();
               	$("#divClientSearch").show();
               	$scope.template = $scope.templates[1];
               	curPage = 1;
               	var html = 'Home <span style="padding-left: 2px"><a href="#">';
               	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
               	html += ' <span style="padding-left: 2px"><a href="#">';
               	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Search Client';
               	$(".BreadCrumColumn")[0].innerHTML = html;
               	$("#tddelete").css('background-color', '#fff');
               	$("#tdadd").css('background-color', '#fff');
               	$("#tdedit").css('background-color', '#fff');
               	$("#tdgetdetails").css('background-color', '#fff');
               	$("#tdsearch").css('background-color', '#ffe4b2');            	
               };
    
            
            $scope.getclientdetails = function(){
            	//search model 
               	$scope.nameSearch = undefined;
    			$scope.addressSearch = undefined;
    			$scope.surnameSearch = undefined;
    			$scope.citySearch = undefined;
    			$scope.contactnumberSearch = undefined;
    			$scope.stateSearch = undefined;
    			$scope.emailSearch = undefined;
    			$scope.startdateSearch = undefined;
    			$scope.enddateSearch = undefined;
    			$scope.ssnSearch = undefined;
            	$("#divsearchgrid").hide();
            	$("#divClientAdd").hide();
            	$("#graphContent").hide();            	
            	$("#divClientUpdate").hide();
            	$("#divClientDelete").hide();
            	$("#divClientDetails").show();
            	$("#divClientSearch").hide();
            	$scope.template = $scope.templates[0];
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
            	$(".BreadCrumColumn")[0].innerHTML = html;
            	$("#tddelete").css('background-color', '#fff');
            	$("#tdadd").css('background-color', '#fff');
            	$("#tdedit").css('background-color', '#fff');
            	$("#tdgetdetails").css('background-color', '#ffe4b2');
            	$("#tdsearch").css('background-color', '#fff');
            	curPage = 1;
            	var records = $scope.noofrecordsDetails;
            	   var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.clientGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows, 3, $scope.noofrecordsDetails);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            
            $scope.getdataforgridfordelete = function(){
            	var records = $scope.noofrecordsDelete;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
	         	 var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/" + offset;
	             $http({
	                 method: 'GET',
	                 url: url
	             }).success(function(response){
	                 if(response.value.error == false){
	                     $scope.deleteclientGrid = response.value.result[0];
	                     insertPaging(response.value.result[1][0].TotalRows, 4, $scope.noofrecordsDelete);
	                 }
	                 else{
	                     alert(response.value.message);
	                 }
	             }).error(function(err){
	                 alert(err.value.message);
	             });
            };
            
            $scope.addclient = function(){
            	//search model 
               	$scope.nameSearch = undefined;
    			$scope.addressSearch = undefined;
    			$scope.surnameSearch = undefined;
    			$scope.citySearch = undefined;
    			$scope.contactnumberSearch = undefined;
    			$scope.stateSearch = undefined;
    			$scope.emailSearch = undefined;
    			$scope.startdateSearch = undefined;
    			$scope.enddateSearch = undefined;
    			$scope.ssnSearch = undefined;
            	$("#divsearchgrid").hide();
            	$("#divClientAdd").show();
            	$("#graphContent").hide();
            	$("#divClientDetails").hide();
            	$("#divClientUpdate").hide();
            	$("#divClientDelete").hide();
            	$("#divClientSearch").hide();
            	$scope.template = $scope.templates[1];
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
            	html += ' <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Add Client';
            	$(".BreadCrumColumn")[0].innerHTML = html;
            	$("#tddelete").css('background-color', '#fff');
            	$("#tdadd").css('background-color', '#ffe4b2');
            	$("#tdedit").css('background-color', '#fff');
            	$("#tdgetdetails").css('background-color', '#fff');
            	$("#tdsearch").css('background-color', '#fff');
            };
 
            $scope.deleteclient = function(){
            	//search model 
            	curPage = 1;
               	$scope.nameSearch = undefined;
    			$scope.addressSearch = undefined;
    			$scope.surnameSearch = undefined;
    			$scope.citySearch = undefined;
    			$scope.contactnumberSearch = undefined;
    			$scope.stateSearch = undefined;
    			$scope.emailSearch = undefined;
    			$scope.startdateSearch = undefined;
    			$scope.enddateSearch = undefined;
    			$scope.ssnSearch = undefined;
            	$("#divsearchgrid").hide();
            	$("#divClientAdd").hide();
            	$("#graphContent").hide();            	
            	$("#divClientUpdate").hide();
            	$("#divClientDelete").show();
            	$("#divClientDetails").hide();
            	$("#divClientSearch").hide();
            	$scope.template = $scope.templates[3];
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
            	html += ' <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Delete Client';
            	$(".BreadCrumColumn")[0].innerHTML = html;
            	$("#tddelete").css('background-color', '#ffe4b2');
            	$("#tdadd").css('background-color', '#fff');
            	$("#tdedit").css('background-color', '#fff');
            	$("#tdgetdetails").css('background-color', '#fff');
            	$("#tdsearch").css('background-color', '#fff');
            	var records = $scope.noofrecordsDelete;
            	   var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.deleteclientGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows, 4, $scope.noofrecordsDelete);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            
          
            $scope.editclient = function(){
            	//search model 
               	$scope.nameSearch = undefined;
    			$scope.addressSearch = undefined;
    			$scope.surnameSearch = undefined;
    			$scope.citySearch = undefined;
    			$scope.contactnumberSearch = undefined;
    			$scope.stateSearch = undefined;
    			$scope.emailSearch = undefined;
    			$scope.startdateSearch = undefined;
    			$scope.enddateSearch = undefined;
    			$scope.ssnSearch = undefined;
            	$("#divsearchgrid").hide();
               	$("#divClientAdd").hide();
            	$("#graphContent").hide();            	
            	$("#divClientUpdate").show();
            	$("#divClientDelete").hide();
            	$("#divClientDetails").hide();
            	$("#divClientSearch").hide();
            	$("#graphContent").hide();  
            	$scope.template = $scope.templates[2];
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
            	html += ' <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Edit Client';
            	$(".BreadCrumColumn")[0].innerHTML = html;
            	$("#tddelete").css('background-color', '#fff');
            	$("#tdadd").css('background-color', '#fff');
            	$("#tdedit").css('background-color', '#ffe4b2');
            	$("#tdgetdetails").css('background-color', '#fff');
            	$("#tdsearch").css('background-color', '#fff');
            	$("#tddashboard").css('background-color', '#fff');            	
                if(roleid == "1"){
            	var url = "/api/client/getallclients";            
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                    	var value = response.value.result[0][0].ClientId;                    	              
                        $scope.clients = response.value.result[0];                    
                        $scope.clientsEdit = 1;                      
        	        	var url = "/api/client/getclientinformation/clientId/"+ $scope.clientsEdit;                                              
        	                $http({
        	                    method: 'GET',
        	                    url: url
        	                }).success(function(response){
        	                    if(response.value.error == false){
        	                    	if(response.value.result[0].length > 0){        		                      
        								 $scope.nameEdit = response.value.result[0][0].Firstname;
        					     			$scope.addressEdit = response.value.result[0][0].Address;
        					     			$scope.surnameEdit = response.value.result[0][0].Lastname;
        					     			$scope.cityEdit = response.value.result[0][0].City;
        					     			$scope.contactnumberEdit = response.value.result[0][0].PhoneNumber;
        					     			$scope.stateEdit = response.value.result[0][0].State;
        					     			$scope.zipcodeEdit = response.value.result[0][0].ZipCode;
        					     			$scope.emailEdit = response.value.result[0][0].Email;
        					     			$scope.startdateEdit = response.value.result[0][0].StartDate;
        					     			$scope.enddateEdit = response.value.result[0][0].EndDate;
        					     			$scope.ssnEdit = response.value.result[0][0].SSNNumber;    
        					     			$scope.passwordEdit = response.value.result[0][0].Password;
        	                    	}
        	                    }
        	                    else{
        	                        alert(response.value.message);
        	                    }
        	                }).error(function(err){
        	                    alert(err.value.message);
        	                });
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
                }
                else{
                	var url ="/api/client/getRequestedClient/";
                	 $http({
 	                    method: 'GET',
 	                    url: url
 	                }).success(function(response){
 	                    if(response.value.error == false){
 	                    	if(response.value.result[0].length > 0){  
 	                    		$scope.clientsEdit = response.value.result[0][0].ClientId;
 								 $scope.nameEdit = response.value.result[0][0].Firstname;
 					     			$scope.addressEdit = response.value.result[0][0].Address;
 					     			$scope.surnameEdit = response.value.result[0][0].Lastname;
 					     			$scope.cityEdit = response.value.result[0][0].City;
 					     			$scope.contactnumberEdit = response.value.result[0][0].PhoneNumber;
 					     			$scope.stateEdit = response.value.result[0][0].State;
 					     			$scope.zipcodeEdit = response.value.result[0][0].ZipCode;
 					     			$scope.emailEdit = response.value.result[0][0].Email;
 					     			$scope.startdateEdit = response.value.result[0][0].StartDate;
 					     			$scope.enddateEdit = response.value.result[0][0].EndDate;
 					     			$scope.ssnEdit = response.value.result[0][0].SSNNumber;    
 					     			$scope.passwordEdit = response.value.result[0][0].Password;
 					     			$scope.hiddenpassword = response.value.result[0][0].Password;
 	                    	}
 	                    }
 	                    else{
 	                        alert(response.value.message);
 	                    }
 	                }).error(function(err){
 	                    alert(err.value.message);
 	                });
    
                }
  
            };
            
            //Coded by ashok
            
            $scope.acceptalert = function(event){
            	var id = event.currentTarget.id.split('-');
            	var url = "/api/client/acceptalert";
                $http({
                    method: 'POST',
                    data:
                    {
                    	"alertid": id[1]
                    },
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        alert(response.value.result);
                        var records = $scope.noofrecordsforalert;                	
                    	var url = "/api/client/getalertsforclient/NoofRecords/"+records+"/pageoffset/0";
                        $http({
                            method: 'GET',
                            url: url
                        }).success(function(response){
                            if(response.value.error == false){
                            	if(response.value.result[0] != undefined){
                                    $scope.clientalertgrid = response.value.result[0];
                                    insertPaging(response.value.result[1][0].TotalRows, 5, $scope.noofrecordsforalert);                        		
                            	}
                            	else{
                                    $scope.clientalertgrid = response.value.result[0];
                                    insertPaging(0, 5, $scope.noofrecordsforalert);                        		
                            	} 
                            }
                            else{
                                alert(response.value.message);
                            }
                        }).error(function(err){
                            alert(err.value.message);
                        });
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            $scope.getalertdataforclients = function(){
            	var records = $scope.noofrecordsforalert;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
            	var url = "/api/client/getalertsforclient/NoofRecords/"+records+"/pageoffset/" + offset;
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.clientalertgrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows, 5, $scope.noofrecordsforalert); 
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            //
            
                                                 
            $scope.Add = function(){
            	var url = "/api/client/createclient";
            	var newzipcodepattern=new RegExp('(^[0-9]{5}$)|(^[0-9]{5}-[0-9]{4}$)');
            	var newphonenumberpattern=new RegExp('(^[0-9]{10}$)|(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)');
            	var ssnpattern=new RegExp('(^[0-9]{3}-[0-9]{2}-[0-9]{4}$)');
            	var statepattern=new RegExp('AL|Alabama|AK|Alaska|AZ|Arizona|AR|Arkansas|CA|California|CO|Colorado|CT|Connecticut|DE|Delaware|FL|Florida|GA|Georgia|HI|Hawaii|ID|Idaho|IL|Illinois|IN|Indiana|IA|Iowa|KS|Kansas|KY|Kentucky|LA|Louisiana|ME|Maine|MD|Maryland|MA|Massachusetts|MI|Michigan|MN|Minnesota|MS|Mississippi|MO|Missouri|MT|Montana|NE|Nebraska|NV|Nevada|NH|New Hampshire|NJ|New Jersey|NM|New Mexico|NY|New York|NC|North Carolina|ND|North Dakota|OH|Ohio|OK|Oklahoma|OR|Oregon|PA|Pennsylvania|RI|Rhode Island|SC|South Carolina|SD|South Dakota|TN|Tennessee|TX|Texas|UT|Utah|VT|Vermont|VA|Virginia|WA|Washington|WV|West Virginia|WI|Wisconsin|WY|Wyoming');
            	
            	if($scope.nameAdd == "" || $scope.nameAdd == undefined){
            		showErrorControl("Please enter a First Name!!", "txtclient");
            		return false;
            	}
            	else if($scope.surnameAdd == "" || $scope.surnameAdd == undefined){
            		showErrorControl("Please enter a Last Name!!", "txtsurname");
            		return false;
            	}
            	else if($scope.addressAdd == "" || $scope.addressAdd == undefined){
            		showErrorControl("Please enter a Address!!", "txtaddress");
            		return false;
            	}            	
            	else if($scope.contactnumberAdd == "" || $scope.contactnumberAdd == undefined){
            		showErrorControl("Please enter a Contact Number!!", "txtcontactnumber");
            		return false;
            	}else if(!newphonenumberpattern.test($scope.contactnumberAdd)){
            		showErrorControl("Please enter a Phone Number in valid format like 1234567890 or 123-456-7890!!", "txtcontactnumber");
            		return false;
            	}
            	else if($scope.cityAdd == "" || $scope.cityAdd == undefined){
            		showErrorControl("Please enter a City!!", "txtcity");
            		return false;
            	}
  
            	else if($scope.stateAdd == "" || $scope.stateAdd == undefined){
            		showErrorControl("Please enter a State!!", "txtstate");
            		return false;
            	}
            	else if(!statepattern.test($scope.stateAdd)){
            		showErrorControl("Please enter a valid US State in the format like TX or Texas!!", "txtstate");
            		return false;
            	}            	
             	else if($scope.zipcodeAdd == "" || $scope.zipcodeAdd == undefined){
            		showErrorControl("Please enter a Zip Code!!", "txtzipcode");
            		return false;
            	}else if(!newzipcodepattern.test($scope.zipcodeAdd)){
            		showErrorControl("Please enter a Zip Code in valid format like 12345 or 12345-6789!!", "txtzipcode");
            		return false;
            	}
            	else if($scope.emailAdd == "" || $scope.emailAdd == undefined){
            		showErrorControl("Please enter a Email!!", "txtemail");
            		return false;
            	}     
            	else if($scope.ssnAdd == "" || $scope.ssnAdd == undefined){
            		showErrorControl("Please enter a SSN Number!!", "txtssn");
            		return false;
            	}else if(!ssnpattern.test($scope.ssnAdd)){
            		showErrorControl("Please enter a SSN in valid format like 123-45-7896!!", "txtssn");
            		return false;
            	}            	
            	else if($scope.passwordAdd == "" || $scope.passwordAdd == undefined){
            		showErrorControl("Please enter a password!!", "txtpassword");
            		return false;
            	}
            	else if(($("#txtstartdate").val() == "" || $("#txtstartdate").val() == undefined)){
            		showErrorControl("Please enter a Start Date!!", "newStartDate");
            		return false;
            	}
            	else if($("#txtenddate").val() == "" || $("#txtenddate").val() == undefined){
            		showErrorControl("Please enter a End Date!!", "txtenddate");
            		return false;
            	}
            	var from = new Date(document.getElementById("txtstartdate").value);
                var to = new Date(document.getElementById("txtenddate").value);
                var days=parseInt((to - from) / (24 * 3600 * 1000));
                var hours=days*9;
                if(to<=from){
            		showErrorControl("End Date must be greater than Start Date!!", "txtenddate");
            		return false;
            	}
                $http({
                    method: 'POST',
                    url: url,
                    data:
                    {
                    	"firstname": $scope.nameAdd,
                    	"lastname": $scope.surnameAdd,
						"address": $scope.addressAdd,
						"phone_no": $scope.contactnumberAdd,						
						"city": $scope.cityAdd,
						"state": $scope.stateAdd,
						"zipcode": $scope.zipcodeAdd,
						"emailaddress": $scope.emailAdd,				
						"start_date":$("#txtstartdate").val(),
						"end_date":$("#txtenddate").val(),
						"ssnnumber": $scope.ssnAdd,
						"password": $scope.passwordAdd						
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        alert(response.value.result);
                        $scope.nameAdd = "";
            			$scope.addressAdd = "";
            			$scope.surnameAdd = "";
            			$scope.cityAdd = "";
            			$scope.contactnumberAdd = "";
            			$scope.stateAdd = "";
            			$scope.zipcodeAdd = "";
            			$scope.emailAdd = "";
            			$scope.startdateAdd = "";
            			$scope.enddateAdd = "";
            			$scope.ssnAdd = "";
            			$scope.passwordAdd = "";            			
                    }
                    else{
                        alert("duplicate client");
                    }
                }).error(function(err){
                	alert("duplicate client");
                });
            };
            
            
            
            $scope.Update = function(){
            	var url = "/api/client/updateclient";
            	
            	var newzipcodepattern=new RegExp('(^[0-9]{5}$)|(^[0-9]{5}-[0-9]{4}$)');
            	var newphonenumberpattern=new RegExp('(^[0-9]{10}$)|(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)');
            	var ssnpattern=new RegExp('(^[0-9]{3}-[0-9]{2}-[0-9]{4}$)');
            	var statepattern=new RegExp('AL|Alabama|AK|Alaska|AZ|Arizona|AR|Arkansas|CA|California|CO|Colorado|CT|Connecticut|DE|Delaware|FL|Florida|GA|Georgia|HI|Hawaii|ID|Idaho|IL|Illinois|IN|Indiana|IA|Iowa|KS|Kansas|KY|Kentucky|LA|Louisiana|ME|Maine|MD|Maryland|MA|Massachusetts|MI|Michigan|MN|Minnesota|MS|Mississippi|MO|Missouri|MT|Montana|NE|Nebraska|NV|Nevada|NH|New Hampshire|NJ|New Jersey|NM|New Mexico|NY|New York|NC|North Carolina|ND|North Dakota|OH|Ohio|OK|Oklahoma|OR|Oregon|PA|Pennsylvania|RI|Rhode Island|SC|South Carolina|SD|South Dakota|TN|Tennessee|TX|Texas|UT|Utah|VT|Vermont|VA|Virginia|WA|Washington|WV|West Virginia|WI|Wisconsin|WY|Wyoming');
            	
            	if($scope.nameEdit == "" || $scope.nameEdit == undefined){
            		showErrorControl("Please enter a First Name!!", "txtnameEdit");
            		return false;
            	}
            	else if($scope.surnameEdit == "" || $scope.surnameEdit == undefined){
            		showErrorControl("Please enter a Last Name!!", "txtsurnameEdit");
            		return false;
            	}            
            	else if($scope.addressEdit == "" || $scope.addressEdit == undefined){
            		showErrorControl("Please enter a Address!!", "txtaddressEdit");
            		return false;
            	}            	
            	else if($scope.contactnumberEdit == "" || $scope.contactnumberEdit == undefined){
            		showErrorControl("Please enter a Contact Number!!", "txtcontactnumberEdit");
            		return false;
            	}else if(!newphonenumberpattern.test($scope.contactnumberEdit)){
            		showErrorControl("Please enter a Phone Number in valid format like 1234567890 or 123-456-7890!!", "txtcontactnumberEdit");
            		return false;
            	}
            	else if($scope.cityEdit == "" || $scope.cityEdit == undefined){
            		showErrorControl("Please enter a City!!", "txtcityEdit");
            		return false;
            	}
  
            	else if($scope.stateEdit == "" || $scope.stateEdit == undefined){
            		showErrorControl("Please enter a State!!", "txtstateEdit");
            		return false;
            	}
            	else if(!statepattern.test($scope.stateEdit)){
            		showErrorControl("Please enter a valid US State in the format like TX or Texas!!", "txtstateEdit");
            		return false;
            	}            	
             	else if($scope.zipcodeEdit == "" || $scope.zipcodeEdit == undefined){
            		showErrorControl("Please enter a Zip Code!!", "txtzipcodeEdit");
            		return false;
            	}else if(!newzipcodepattern.test($scope.zipcodeEdit)){
            		showErrorControl("Please enter a Zip Code in valid format like 12345 or 12345-6789!!", "txtzipcodeEdit");
            		return false;
            	}
            	else if($scope.emailEdit == "" || $scope.emailEdit == undefined){
            		showErrorControl("Please enter a Email!!", "txtemailEdit");
            		return false;
            	}     
            	else if($scope.ssnEdit == "" || $scope.ssnEdit == undefined){
            		showErrorControl("Please enter a SSN Number!!", "txtssnEdit");
            		return false;
            	}else if(!ssnpattern.test($scope.ssnEdit)){
            		showErrorControl("Please enter a SSN Number in valid format like 12345 or 12345-6789!!", "txtssnEdit");
            		return false;
            	}            	
            	else if($scope.passwordEdit == "" || $scope.passwordEdit == undefined){
            		showErrorControl("Please enter a password!!", "txtpasswordEdit");
            		return false;
            	}
            	else if(($("#txtstartdateEdit").val() == "" || $("#txtstartdateEdit").val() == undefined)){
            		showErrorControl("Please enter a Start Date!!", "txtstartdateEdit");
            		return false;
            	}
            	else if($("#txtenddateEdit").val() == "" || $("#txtenddateEdit").val() == undefined){
            		showErrorControl("Please enter a End Date!!", "txtenddateEdit");
            		return false;
            	}
            	
            	var passwordChanged = false;
     			if($scope.passwordEdit != $scope.hiddenpassword){
     				passwordChanged = true;
     				
     			}
            	var from = new Date(document.getElementById("txtstartdateEdit").value);
                var to = new Date(document.getElementById("txtenddateEdit").value);
                var days=parseInt((to - from) / (24 * 3600 * 1000));
                var hours=days*9;
                if(to<=from){
            		showErrorControl("End Date must be greater than Start Date!!", "txtenddateEdit");
            		return false;
            	}
                
                $http({
                    method: 'POST',
                    url: url,
                    data:
                    {                    	               				
						"clientid":	$scope.clientsEdit,
						"userid":	$scope.userEdit,
						 "firstname":$scope.nameEdit,
						 "address":$scope.addressEdit,
						 "lastname":$scope.surnameEdit,
						 "city":$scope.cityEdit,
						 "phone_no":$scope.contactnumberEdit,
						 "state":$scope.stateEdit,
						 "zipcode":$scope.zipcodeEdit,
						 "email":$scope.emailEdit,
						 "start_date":$("#txtstartdateEdit").val(),
						"end_date":$("#txtenddateEdit").val(),
						 "ssnnumber":$scope.ssnEdit,
						 "password":$scope.passwordEdit,
						 "passwordChanged": passwordChanged
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        alert(response.value.result);
                        $scope.clientsEdit="";
                        $scope.nameEdit = "";
             			$scope.addressEdit = "";
             			$scope.surnameEdit = "";
             			$scope.cityEdit = "";
             			$scope.contactnumberEdit = "";
             			$scope.stateEdit = "";
             			$scope.zipcodeEdit = "";
             			$scope.emailEdit = "";
             			$scope.startdateEdit = "";
             			$scope.enddateEdit = "";
             			$scope.ssnEdit = "";
             			$scope.passwordEdit = "";  
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
           
                  
            
            $scope.resetAddAttribute = function(){
            	 $scope.nameAdd = "";
     			$scope.addressAdd = "";
     			$scope.surnameAdd = "";
     			$scope.cityAdd = "";
     			$scope.contactnumberAdd = "";
     			$scope.stateAdd = "";
     			$scope.zipcodeAdd = "";
     			$scope.emailAdd = "";
     			$scope.startdateAdd = "";
     			$scope.enddateAdd = "";
     			$scope.ssnAdd = "";
     			$scope.passwordAdd = "";
            };
            
            $scope.resetEditAttribute = function(){
            	 $scope.nameEdit = undefined;
     			$scope.addressEdit = undefined;
     			$scope.surnameEdit = undefined;
     			$scope.cityEdit = undefined;
     			$scope.contactnumberEdit = undefined;
     			$scope.stateEdit = undefined;
     			$scope.zipcodeEdit = undefined;
     			$scope.emailEdit = undefined;
     			$scope.startdateEdit = undefined;
     			$scope.enddateEdit = undefined;
     			$scope.ssnEdit = undefined;
     			$scope.passwordEdit = undefined;     	
            };
           
            
           $scope.resetSearchAttribute = function() {
        	   $scope.nameSearch = undefined;
    			$scope.addressSearch = undefined;
    			$scope.surnameSearch = undefined;
    			$scope.citySearch = undefined;
    			$scope.contactnumberSearch = undefined;
    			$scope.stateSearch = undefined;
    			$scope.emailSearch = undefined;
    			$scope.startdateSearch = undefined;
    			$scope.enddateSearch = undefined;
    			$scope.ssnSearch = undefined;
        	   $("#divsearchgrid").hide();
           }
            
            $scope.loadclientdetailsbyid = function(e, req, res){       
            	var id = $scope.clientsEdit;
            	var url ="/api/client/getclientinformation/clientId/" + id;            	    	 
	                $http({
	                    method: 'GET',
	                    url: url	                    	                    	              
	                }).success(function(response){
	                    if(response.value.error == false){
	                    	if(response.value.result[0].length > 0){
	                    		 $scope.nameEdit = response.value.result[0][0].Firstname;
					     			$scope.addressEdit = response.value.result[0][0].Address;
					     			$scope.surnameEdit = response.value.result[0][0].Lastname;
					     			$scope.cityEdit = response.value.result[0][0].City;
					     			$scope.contactnumberEdit = response.value.result[0][0].PhoneNumber;
					     			$scope.stateEdit = response.value.result[0][0].State;
					     			$scope.zipcodeEdit = response.value.result[0][0].ZipCode;
					     			$scope.emailEdit = response.value.result[0][0].Email;
					     			$scope.startdateEdit = response.value.result[0][0].StartDate;
					     			$scope.enddateEdit = response.value.result[0][0].EndDate;
					     			$scope.ssnEdit = response.value.result[0][0].SSNNumber;
					     			$scope.passwordEdit = response.value.result[0][0].Password;	
					     			$scope.hiddenpassword = response.value.result[0][0].Password;
	                    	}
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	           });
            };
            
           
           
            
            
            
            
           /* $scope.getclientrecordsfordisplayDelete = function(){
            	var records = $scope.noofrecordsDelete;
            	var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.deletebuildingGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };*/
            
            
            $scope.getdataforgrid = function(){
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
	        	var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/" + offset;
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.deleteclientGrid = response.value.result[0];
	                        $scope.clientGrid = response.value.result[0];
	                        insertPaging(response.value.result[1][0].TotalRows, 3, $scope.noofrecordsDetails); 
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	           });
            };
            
            
            
            
            $scope.clientrecordsfordisplaySearch = function(){            	
            	var records = $scope.noofrecordsSearch;
            	var url = "/api/client/getsearched/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'POST',
                    url: url,
                    data:{
                    	 "firstname":$scope.nameSearch,
						 "address":$scope.addressSearch,
						 "lastname":$scope.surnameSearch,
						 "city":$scope.citySearch,
						 "phone_no":$scope.contactnumberSearch,
						 "state":$scope.stateSearch,						 
						 "email":$scope.emailSearch,
						 "ssnnumber":$scope.ssnSearch,
						 "startDate":$scope.startDateSearch,
						 "endDate":$scope.endDateSearch						 
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.clientSearchGrid = response.value.result[0];
                       insertPaging(response.value.result[1][0].TotalRows, 2, $scope.noofrecordsSearch);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            
            $scope.getclientrecordsfordisplaySearch = function(){
            	var records = $scope.noofrecordsDetails;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
            	var url = "/api/client/searchclient";
                $http({
                    method: 'POST',
                    url: url,
                    data:{
                    	 "firstname":$scope.nameSearch,
						 "address":$scope.addressSearch,
						 "lastname":$scope.surnameSearch,
						 "city":$scope.citySearch,
						 "phone_no":$scope.contactnumberSearch,
						 "state":$scope.stateSearch,						 
						 "email":$scope.emailSearch,
						 "ssnnumber":$scope.ssnSearch,
						 "startDate":$scope.startDateSearch,
						 "endDate":$scope.endDateSearch,
						 "noofrecords": records,
						 "pageoffset": offset						 
                    }
                }).success(function(response){
                    if(response.value.error == false){                    	               
                        $scope.clientSearchGrid = response.value.result;
                        insertPaging(response.totalrows[0].TotalRows, 2, $scope.noofrecordsSearch);
                        if(response.totalrows[0].TotalRows == 0){
                        	$("#divsearchgrid").hide();
                        }
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            $scope.deleteclientInfo = function(event){
            	var id = event.currentTarget.id.split('-');
            	var r = confirm("Are you sure you want to delete this client");
				if (r == true) {
				    var url = "/api/client/deleteclient/clientId/" + id[1];
	                $http({
	                    method: 'DELETE',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        alert(response.value.result);
	                        var records = $scope.noofrecordsDelete;
		                        var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
		                        $http({
		                            method: 'GET',
		                            url: url
		                        }).success(function(response){
		                            if(response.value.error == false){
		                            	$scope.deleteclientGrid = response.value.result[0];
		                                $scope.totalrows = response.value.result[1];		                                		                               
		                                curPage = 1;
		                                insertPaging(response.value.result[1][0].TotalRows, 4, $scope.noofrecordsDelete);
		                            }
		                            else{
		                                alert(response.value.message);
		                            }
		                        }).error(function(err){
		                            alert(err.value.message);
		                        });
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                });
				}
            };
            
            
            
            $scope.SearchClient = function(){
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	var url = "/api/client/searchclient";          
                $http({
                    method: 'POST',
                    url: url,
                    data:
                    {
						 "firstname":$scope.nameSearch,
						 "address":$scope.addressSearch,
						 "lastname":$scope.surnameSearch,
						 "city":$scope.citySearch,
						 "phone_no":$scope.contactnumberSearch,
						 "state":$scope.stateSearch,						 
						 "email":$scope.emailSearch,
						 "ssnnumber":$scope.ssnSearch,
						 "startDate":$scope.startDateSearch,
						 "endDate":$scope.endDateSearch,
						 "noofrecords": records,
						 "pageoffset": 0
                    }
                }).success(function(response){
                    if(response.value.error == false){                                    
             			 $scope.clientSearchGrid = response.value.result;
                         insertPaging(response.totalrows[0].TotalRows, 2, $scope.noofrecordsSearch);
                         if(response.totalrows[0].TotalRows == 0){
                 			 $("#divsearchgrid").hide();                         	
                         }
                         else{
                        	 $("#divsearchgrid").show();   
                         }
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            
            $scope.loadbuildingForClientdetailsbyid = function(e, req, res){       
            	var id = $scope.darshboardDisplay;
            	var url ="/api/client/getcheckpointsinformation/buildingId/" + id;            	    	 
	                $http({
	                    method: 'GET',
	                    url: url	                    	                    	              
	                }).success(function(response){
	                    if(response.value.error == false){
	                    	if(response.value.result[0].length > 0){
	                    		 $scope.nameEdit = response.value.result[0][0].Firstname;
					     			$scope.addressEdit = response.value.result[0][0].Address;
					     			$scope.surnameEdit = response.value.result[0][0].Lastname;
					     			$scope.cityEdit = response.value.result[0][0].City;
					     			$scope.contactnumberEdit = response.value.result[0][0].PhoneNumber;
					     			$scope.stateEdit = response.value.result[0][0].State;
					     			$scope.zipcodeEdit = response.value.result[0][0].ZipCode;
					     			$scope.emailEdit = response.value.result[0][0].Email;
					     			$scope.startdateEdit = response.value.result[0][0].StartDate;
					     			$scope.enddateEdit = response.value.result[0][0].EndDate;
					     			$scope.ssnEdit = response.value.result[0][0].SSNNumber;
					     			$scope.passwordEdit = response.value.result[0][0].Password;	
					     			$scope.hiddenpassword = response.value.result[0][0].Password;
	                    	}
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	           });
            };
         
            
            
            
            };
        
    