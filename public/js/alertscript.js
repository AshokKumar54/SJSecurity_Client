
function removeErrorClass(id){
	$("#"+id).removeClass('errorInput');
}

  function alertmodule($scope, $http) {
        	 
             var roleid = localStorage.getItem("roleid");
        	var buildinglistclient;
        	//alert("hi");
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
        	
        	$scope.noofrecordsSearch = "10";
        	$scope.noofrecordssubmittedalertguard = "10";
        	$scope.noofrecordsDetailsguard = "10";
        	$scope.noofrecordssubmittedalert = "10";
        	$scope.noofrecordslistclient = "10";
        	$scope.noofrecordsDelete = "10";
        	$scope.noofrecordsDetailsByClient = "10";
        	$scope.noofrecordsDetailsBuilding = "10";
        	$scope.noofrecordsDetails = "10";
        	
        	$scope.severityData = {
        			data:[
        				{value:'1',name:'1'},
        				{value:'2',name:'2'},
        				{value:'3',name:'3'},
        				{value:'4',name:'4'},
        				{value:'5',name:'5'}
        			]
        	};
        	//load buildings
        	var url = "/api/building/getallbuildings";
	             $http({
	                 method: 'GET',
	                 url: url
	             }).success(function(response){
	                 if(response.value.error == false){
	                 	$scope.buildings = response.value.result[0];
	                 	//$scope.buildingsEdit = 1;
	                 }
	                 else{
	                     alert(response.value.message);
	                 }
	             }).error(function(err){
	                 alert(err.value.message);
             });
	          
	         //load clients
	             var url = "/api/building/getallclients";
	             $http({
	                 method: 'GET',
	                 url: url
	             }).success(function(response){
	                 if(response.value.error == false){
	                 	$scope.clients = response.value.result[0];
	                 	//$scope.buildingsEdit = 1;
	                 }
	                 else{
	                     alert(response.value.message);
	                 }
	             }).error(function(err){
	                 alert(err.value.message);
             });
	            //
	             if(roleid=="2")
	            	 {
	            	 var url = "/api/alert/getBuildingidForClient";
		             $http({
		                 method: 'GET',
		                 url: url
		             }).success(function(response){
		            	 
		                 if(response.value.error == false){
		                 	$scope.buildingsbyclient = response.value.result[0];
		                 	buildinglistclient=response.value.result[0];
		                 	
		                 }
		                 else{
		                     alert(response.value.message);
		                 }
		             }).error(function(err){
		                 alert(err.value.message);
	             });
	            	 
	            	 }
	             
        	
          
           if(roleid=="1")
        	   {
        	   	 $("#receptioncolumn").height(1000);
        	     $("#alertsListForAdmin").show();
        	   	 $("#divAlertDetails").show();
        	     $("#alertsListByBuilding").hide();
	        	 $("#divAddAlert").hide();
				 $("#divDeleteAlert").hide();
				 $("#alertsListByClientForAdmin").hide();
				 $("#divSearchAlert").hide();
        	   	 $("#tddetails").css('background-color', '#ffe4b2');
        	   	 $("#tabsforclient").hide();
        	   	 $("#content").show();
        	  // 	var records = $scope.noofrecordsDetails;
		    	  var url = "/api/alert/getAllAlert/NoofRecords/"+10+"/pageoffset/0";
		    	  curPage=1;
		    	  $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                	
	                    if(response.value.error == false){
	                        $scope.allAlertsList = response.value.result[0];
	                        insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
	                        //insertPaging(0);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                }); 
        	   }
           else if(roleid=="2")
        	   {
        	   //$("#receptioncolumn").attr
        	   	$("#tabsforclient").show();
        	   	$("#content").hide();
        	   	$("#tddetailsClient").css('background-color', '#ffe4b2');
        	    $("#alertsListClient").show();
        	   	var records = $scope.noofrecordsDetails;
			      var url = "/api/alert/getAlertsForClient/NoofRecords/"+records+"/pageoffset/0";
			      $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.allAlertsListforlistclient = response.value.result[0];
	                        insertPaging(response.value.result[1][0].TotalRows, 5, $scope.noofrecordsDetails);
	                        //insertPaging(10);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                }); 
        	   }
           else
        	   {
        	    $("#alertsSubmittedByGuard").show();
        	    $("#tdSubmittedAlertG").css('background-color', '#ffe4b2');
        	    $("#tabsforguard").show();
        	   	$("#tabsforclient").hide();
        	   	$("#content").hide();
        	   	var records = $scope.noofrecordsDetails;
        	    var url = "/api/alert/listSubmittedAlertsGuard/NoofRecords/"+records+"/pageoffset/0";
			      $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                	
	                    if(response.value.error == false){
	                        $scope.allsubmitAlertsList = response.value.result[0];
	                        insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
	                        //insertPaging(10);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                });
			      var url = "/api/alert/listBuildingbyGuard";
			      
			      $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                	
	                    if(response.value.error == false){
	                        $scope.listBuildByGu = response.value.result[0];
	                     
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                });
			      
        	   }
           $("#divAlertDetails").show();
        	
        	
        	$scope.addalert = function(){
 			   $("#divAddAlert").show();
 			  $(".gridalertclients").hide();
 			   $(".gridalertbuilding").hide();
 				  $("#divAlertDetails").hide();
 				  $("#alertsListByBuilding").hide();
 				  $("#divDeleteAlert").hide();
 				  $("#divSearchAlert").hide();
 				  $("#alertsListByClientForAdmin").hide();
 				   var html = 'Home <span style="padding-left: 2px"><a href="#">';
 			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
 			      html += ' <span style="padding-left: 2px"><a href="#">';
 			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Add Alert';
 			      $(".BreadCrumColumn")[0].innerHTML = html;
 			      $("#tddelete").css('background-color', '#fff');
 			      $("#tdadd").css('background-color', '#ffe4b2');
 			      $("#tdedit").css('background-color', '#fff');
 			      $("#tddetails").css('background-color', '#fff');
 			      $("#tdsearch").css('background-color', '#fff');
 			      $("#tdbyBuildAdm").css('background-color', '#fff');
			      $("#tdbyClientAdm").css('background-color', '#fff');
 			     
 			   };
 			  $scope.resetAddAttribute = function(){
	            	$scope.newalertname = "";
	    			$scope.newbuildingid = "";
	    			$scope.newclientid = "";
	    			$scope.newseverity = "";
	    			$scope.newdescription = "";
	    			
	            };
        	$scope.listAlerts = function(){
        		curPage = 1;
        		$(".gridalertclients").hide();
        		$(".gridalertbuilding").hide();
        		$("#divAlertDetails").show();
			    $("#divAddAlert").hide();
			    $("#divDeleteAlert").hide();
			    $("#alertsListByBuilding").hide();
			    $("#alertsListByClientForAdmin").hide();
				$("#divSearchAlert").hide();
				$(".searchDataGrid").hide();
				var html = 'Home <span style="padding-left: 2px"><a href="#">';
 			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
 			      html += ' <span style="padding-left: 2px"><a href="#">';
 			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  List Alert';
 			      $(".BreadCrumColumn")[0].innerHTML = html;
 			      $("#tddelete").css('background-color', '#fff');
 			      $("#tdadd").css('background-color', '#fff');
 			      $("#tdedit").css('background-color', '#fff');
 			      $("#tddetails").css('background-color', '#ffe4b2');
 			      $("#tdsearch").css('background-color', '#fff');
 			     $("#tdbyBuildAdm").css('background-color', '#fff');
			     $("#tdbyClientAdm").css('background-color', '#fff');
			     if(roleid=="1"){
			    	 //alert(" in if");
			    	 var records = $scope.noofrecordsDetails;
			    	  var url = "/api/alert/getAllAlert/NoofRecords/"+records+"/pageoffset/0";
			    	  
			    	  $http({
		                    method: 'GET',
		                    url: url
		                }).success(function(response){
		                	
		                    if(response.value.error == false){
		                        $scope.allAlertsList = response.value.result[0];
		                        insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
		                        //insertPaging(10);
		                    }
		                    else{
		                        alert(response.value.message);
		                    }
		                }).error(function(err){
		                    alert(err.value.message);
		       }); 
			      
			      }else
			    	  {
			    	  	//alert(" in else");
			    	  }
			    	  };
			    	  
			    	$scope.listalertrecordsfordisplay = function(){
			            	var records = $scope.noofrecordsDetails;
			            	//alert(" records "+records);
			            	var offset = 0;
			            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
			            		offset = (parseInt(curPage) - 1) * parseInt(records);
			            	}
			            	else{
								offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
							}
			            	var url = "/api/alert/getAllAlert/NoofRecords/"+records+"/pageoffset/"+offset;
			            	//lert(url);
			                $http({
			                    method: 'GET',
			                    url: url
			                }).success(function(response){
			                    if(response.value.error == false){
			                        $scope.allAlertsList = response.value.result[0];
			                        insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
			                    }
			                    else{
			                        alert(response.value.message);
			                    }
			                }).error(function(err){
			                    alert(err.value.message);
			                });
			            };
			            
			         $scope.createAlert=function(){
			        	
			        	 if($scope.newalertname == "" || $scope.newalertname == undefined){
			        		 	showErrorControl("Please enter a Name!!", "newalertname");
			            		return false;
			            	}
			        	 var url="/api/alert/createAlert";
			        	 $http({
			        		 method:'POST',
			        		 url : url,
			        		 data:{
			        			 "newalertname":$scope.newalertname,
			        			 "newbuildingid":$scope.newbuildingid,
			        			 "newclientid":$scope.newclientid,
			        			 "newseverity":$scope.newseverity,
			        			 "newdescription":$scope.newdescription
			        		 }
			        	 }).success(function(){
			        		 alert(" Alert Created Successfully!!");
			        		 $scope.newalertname = "";
				    			$scope.newbuildingid = "";
				    			$scope.newclientid = "";
				    			$scope.newseverity = "";
				    			$scope.newdescription = "";
			        	 });
			         };
			         
			         $scope.resetAddAttribute = function(){
			        	 	$scope.newalertname = "";
			    			$scope.newbuildingid = "";
			    			$scope.newclientid = "";
			    			$scope.newseverity = "";
			    			$scope.newdescription = "";
			    			
			         };
			         
			         $scope.listAlertByBuilding=function()
			         {
			        	 $(".gridalertclients").hide();
			        	 $(".gridalertbuilding").hide();
			        	 $("#alertsListByBuilding").show();
			        	 $("#divAddAlert").hide();
		 				 $("#divAlertDetails").hide();
		 				 $("#divDeleteAlert").hide();
		 				 $("#alertsListByClientForAdmin").hide();
		 				 $("#divSearchAlert").hide();
		 				$(".searchDataGrid").hide();
		 				   var html = 'Home <span style="padding-left: 2px"><a href="#">';
		 			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
		 			      html += ' <span style="padding-left: 2px"><a href="#">';
		 			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  List Alert By Building';
		 			      $(".BreadCrumColumn")[0].innerHTML = html;
		 			      $("#tddelete").css('background-color', '#fff');
		 			      $("#tdadd").css('background-color', '#fff');
		 			      $("#tdbyBuildAdm").css('background-color', '#ffe4b2');
		 			      $("#tddetails").css('background-color', '#fff');
		 			      $("#tdsearch").css('background-color', '#fff');
		 			     $("#tdbyClientAdm").css('background-color', '#fff');
		 			    
			         };
			         
			         $scope.listByBuilding = function()
			         {	curPage = 1;
			        	 var selbuildingid=$scope.selbuildingid;
			        	 var records = $scope.noofrecordsDetailsBuilding; 
			        	// alert(" selected build id "+selbuildingid);
			        	 var url="/api/alert/listbyBuilding/selbuildingid/"+selbuildingid+"/NoofRecords/"+records+"/pageoffset/0";
			        	 $http({
			        		method:'GET',
			        		url:url
			        	 }).success(function(response){
			        		         if(response.value.error == false){
			        		        	//alert(" in building");
				                        $scope.allAlertsListbyBuilding = response.value.result[0];
				                        //alert($scope.allAlertsListbyBuilding);
				                        insertPaging(response.value.result[1][0].TotalRows, 2, $scope.noofrecordsDetailsBuilding);
				                        if(response.value.result[1][0].TotalRows == 0){
				                        	$(".gridalertbuilding").hide();
				                        }
				                        else{
				                        	$(".gridalertbuilding").show();
				                        }
				                    }
				                    else{
				                        alert(response.value.message);
				                    }
				                }).error(function(err){
				                    alert(err.value.message);
				                });
			         };
			         
			         $scope.listalertrecordsbybuild1 = function()
			         {
			        	 var records = $scope.noofrecordsDetailsBuilding;
			        	 var selbuildingid = $scope.selbuildingid;
			        	 //alert("records listalertrecordsbybuild "+records);
			        	 var offset = 0;
			            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
			            		offset = (parseInt(curPage) - 1) * parseInt(records);
			            	}
			            	else{
								offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
			            	}

			            	//alert(" records "+records);
			            	var url = "/api/alert/listbyBuilding/selbuildingid/"+selbuildingid+"/NoofRecords/"+records+"/pageoffset/"+offset;
			               // alert(" in records by building ");
			            	$http({
			                    method: 'GET',
			                    url: url
			                }).success(function(response){
			                    if(response.value.error == false){
			                        $scope.allAlertsListbyBuilding = response.value.result[0];
			                        insertPaging(response.value.result[1][0].TotalRows, 2, $scope.noofrecordsDetailsBuilding);
			                        if(response.value.result[1][0].TotalRows == 0){
			                        	$(".gridalertbuilding").hide();
			                        }
			                        else{
			                        	$(".gridalertbuilding").show();
			                        }
			                    }
			                    else{
			                        alert(response.value.message);
			                    }
			                }).error(function(err){
			                    alert(err.value.message);
			                });
			        	 
			         };
			         
			         $scope.listAlertByClient=function()
			         {	
			        	 $(".gridalertclients").hide();
			        	 $(".gridalertbuilding").hide();
			        	 $("#alertsListByClientForAdmin").show();
			        	 $("#alertsListByBuilding").hide();
			        	 $("#divAddAlert").hide();
		 				 $("#divAlertDetails").hide();
		 				 $("#divDeleteAlert").hide();
		 				 $("#divSearchAlert").hide();
		 				$(".searchDataGrid").hide();
		 				   var html = 'Home <span style="padding-left: 2px"><a href="#">';
		 			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
		 			      html += ' <span style="padding-left: 2px"><a href="#">';
		 			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  List Alert By Client';
		 			      $(".BreadCrumColumn")[0].innerHTML = html;
		 			      $("#tddelete").css('background-color', '#fff');
		 			      $("#tdadd").css('background-color', '#fff');
		 			      $("#tdbyBuildAdm").css('background-color', '#fff');
		 			      $("#tddetails").css('background-color', '#fff');
		 			      $("#tdsearch").css('background-color', '#fff');
		 			     $("#tdbyClientAdm").css('background-color', '#ffe4b2');
			         };
			         
			         
			         $scope.listByClient=function()
			         {	curPage = 1;
			        	 var selclientid=$scope.selclientid;
			        	 var records = $scope.noofrecordsDetailsByClient; 
			        	 //alert(" selected client id "+selclientid);
			        	 var url="/api/alert/listbyClient/selclientid/"+selclientid+"/NoofRecords/"+records+"/pageoffset/0";
			        	 $http({
			        		method:'GET',
			        		url:url
			        	 }).success(function(response){
			        		 		//alert(" in success!");
			        		         if(response.value.error == false){
				                        $scope.allAlertsLisByClient = response.value.result[0];
				                        insertPaging(response.value.result[1][0].TotalRows, 3, $scope.noofrecordsDetailsByClient);
				                        if(response.value.result[1][0].TotalRows == 0){
				                        	$(".gridalertclients").hide();
				                        }
				                        else{
				                        	$(".gridalertclients").show();
				                        }
				                    }
				                    else{
				                        alert(response.value.message);
				                    }
				                }).error(function(err){
				                    alert(err.value.message);
				                });
			         };
			         
			         
			         $scope.listalertrecordsbyclient=function()
			         {	//alert(" in listalertrecordsbyclient ");
			        	 var records = $scope.noofrecordsDetailsByClient;
			        	 var selclientid=$scope.selclientid;
			        	 var offset = 0;
			            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
			            		offset = (parseInt(curPage) - 1) * parseInt(records);
			            	}
			            	else{
								offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);}

			            	var url = "/api/alert/listbyClient/selclientid/"+selclientid+"/NoofRecords/"+records+"/pageoffset/"+offset;
			                $http({
			                    method: 'GET',
			                    url: url
			                }).success(function(response){
			                    if(response.value.error == false){
			                        $scope.allAlertsLisByClient = response.value.result[0];
			                        insertPaging(response.value.result[1][0].TotalRows, 3, $scope.noofrecordsDetailsByClient);
			                        if(response.value.result[1][0].TotalRows == 0){
			                        	$(".gridalertclients").hide();
			                        }
			                        else{
			                        	$(".gridalertclients").show();
			                        }
			                    }
			                    else{
			                        alert(response.value.message);
			                    }
			                }).error(function(err){
			                    alert(err.value.message);
			                });
			        	 
			         };
			         // script to delete alert starts here
			         $scope.deletealert = function(){
			        	 curPage = 1;
			        	 $(".gridalertclients").hide();
			        	 $(".gridalertbuilding").hide();
					       $("#divDeleteAlert").show();
						   $("#divAlertDetails").hide();
						   $("#divAddAlert").hide();
						   $("#alertsListByClientForAdmin").hide();
						   $("#alertsListByBuilding").hide();
						   $("#divSearchAlert").hide();
						   $(".searchDataGrid").hide();
						    var html = 'Home <span style="padding-left: 2px"><a href="#">';
					                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
					                html += ' <span style="padding-left: 2px"><a href="#">';
					                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Delete Alert';
					                $(".BreadCrumColumn")[0].innerHTML = html;
					                $("#tddelete").css('background-color', '#ffe4b2');
					                $("#tdadd").css('background-color', '#fff');
					                $("#tdedit").css('background-color', '#fff');
					                $("#tddetails").css('background-color', '#fff');
					                $("#tdsearch").css('background-color', '#fff');
					                  $("#tdbyBuildAdm").css('background-color', '#fff');
					 			     $("#tdbyClientAdm").css('background-color', '#fff');
					                var records = $scope.noofrecordsDelete;
					            	var url = "/api/alert/getAllAlert/NoofRecords/"+records+"/pageoffset/0";
					                $http({
					                    method: 'GET',
					                    url: url
					                }).success(function(response){
					                    if(response.value.error == false){
					                        $scope.deleteAlertsList = response.value.result[0];
					                        insertPaging(response.value.result[1][0].TotalRows, 4 , $scope.noofrecordsDelete);
					                    }
					                    else{
					                        alert(response.value.message);
					                    }
					                }).error(function(err){
					                    alert(err.value.message);
					                });
					                
					   };
					   
					   $scope.removeAlert=function(index){
						   curPage = 1;
						   var r = confirm("Are you sure you want to delete this alert");
						   if (r == true) {
							    var url = "/api/alert/deleteAlert/id/" + $scope.deleteAlertsList[index].id;
							    //alert(" url :"+url);
				                $http({
				                    method: 'DELETE',
				                    url: url
				                }).success(function(response){
				                    if(response.value.error == false){
				                        //alert(response.value.result);
				                        var records = $scope.noofrecordsDelete;
						            	var url = "/api/alert/getAllAlert/NoofRecords/"+records+"/pageoffset/0";
						                $http({
						                    method: 'GET',
						                    url: url
						                }).success(function(response){
						                    if(response.value.error == false){
						                        $scope.deleteAlertsList = response.value.result[0];
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
					   
					   $scope.getalertrecordsfordelete = function(){
			            	var records = $scope.noofrecordsDelete;
			            	var offset = 0;
			            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
			            		offset = (parseInt(curPage) - 1) * parseInt(records);
			            	}
			            	else{
								offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);}

			            	var url = "/api/alert/getAllAlert/NoofRecords/"+records+"/pageoffset/"+offset;
			            	//alert(" in getalertrecordsfordelete ");
			                $http({
			                    method: 'GET',
			                    url: url
			                }).success(function(response){
			                    if(response.value.error == false){
			                        $scope.deleteAlertsList = response.value.result[0];
			                        insertPaging(response.value.result[1][0].TotalRows, 4, $scope.noofrecordsDelete);
			                    }
			                    else{
			                        alert(response.value.message);
			                    }
			                }).error(function(err){
			                    alert(err.value.message);
			                });
			            };
			            // delete alert ends here
			            
			            //start client tabs
			            $scope.listAlertsfrClient= function(){
			            	//alert(" in list");
			            	curPage = 1;
						      $("#alertsListClient").show();
						      $("#alertsSubmittedClient").hide();
						      $("#alertsListByBuilding").hide();
						      $("#alertsListByBuildingFrClient").hide();
						      $("#divSearchAlert").hide();
						      $(".searchDataGrid").hide();
						      $("#divSearchAlertGuard").hide(); 
						      
						      var html = 'Home <span style="padding-left: 2px"><a href="#">';
						      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
						      $(".BreadCrumColumn")[0].innerHTML = html;
						      $("#tdbyBuilClient").css('background-color', '#fff');
						      $("#tdSubmittedAlert").css('background-color', '#fff');
						      $("#tddetailsClient").css('background-color', '#ffe4b2');
						      $("#tdsearchCL").css('background-color', '#fff');
						    	  var records = $scope.noofrecordslistclient;
							      var url = "/api/alert/getAlertsForClient/NoofRecords/"+records+"/pageoffset/0";
							      $http({
					                    method: 'GET',
					                    url: url
					                }).success(function(response){
					                    if(response.value.error == false){
					                        $scope.allAlertsListforlistclient = response.value.result[0];
					                        insertPaging(response.value.result[1][0].TotalRows, 5, $scope.noofrecordslistclient);
					                        //insertPaging(10);
					                    }
					                    else{
					                        alert(response.value.message);
					                    }
					                }).error(function(err){
					                    alert(err.value.message);
					                });  
						    
						   };
						   
						   $scope.listalertrecordsforclient = function(){
				            	var records = $scope.noofrecordslistclient;
				            	var offset = 0;
				            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
				            		offset = (parseInt(curPage) - 1) * parseInt(records);
				            	}
				            	else{
									offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);}

				            	var url = "/api/alert/getAlertsForClient/NoofRecords/"+records+"/pageoffset/"+offset;
				                $http({
				                    method: 'GET',
				                    url: url
				                }).success(function(response){
				                    if(response.value.error == false){
				                        $scope.allAlertsListforlistclient = response.value.result[0];
				                        insertPaging(response.value.result[1][0].TotalRows, 5, $scope.noofrecordslistclient);
				                    }
				                    else{
				                        alert(response.value.message);
				                    }
				                }).error(function(err){
				                    alert(err.value.message);
				                });
				            };
				            // list submitted alerts
				            $scope.takeAction=function(index){
				            	var url = "/api/alert/alertClientAction/alertId/" + $scope.allAlertsSubmittedalert[index].id;
									    alert(" url :"+url);
						                $http({
						                    method: 'PUT',
						                    url: url
						                }).success(function(response){
						                    if(response.value.error == false){
						                        //alert(response.value.result);
						                    	
						                        var records = $scope.noofrecordssubmittedalert;
								            	var url = "/api/alert/listSubmittedAlerts/NoofRecords/"+records+"/pageoffset/0";
								                $http({
								                    method: 'GET',
								                    url: url
								                }).success(function(response){
								                    if(response.value.error == false){
								                        $scope.allAlertsSubmittedalert = response.value.result[0];
								                        insertPaging(response.value.result[1][0].TotalRows, 7, $scope.noofrecordssubmittedalert);
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
							    
				            $scope.listSubmittedAlert= function(){
				            	curPage = 1;
							      $("#alertsSubmittedClient").show();
							      $("#alertsListClient").hide();
							      $("#alertsListByBuilding").hide();
							      $("#alertsListByBuildingFrClient").hide();
							      $("#divSearchAlert").hide();
							      $(".searchDataGrid").hide();
							      $("#divSearchAlertGuard").hide(); 
							      var html = 'Home <span style="padding-left: 2px"><a href="#">';
							      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
							      $(".BreadCrumColumn")[0].innerHTML = html;
							      $("#tdbyBuilClient").css('background-color', '#fff');
							      $("#tdSubmittedAlert").css('background-color', '#ffe4b2');
							      $("#tddetailsClient").css('background-color', '#fff');
							      $("#tdsearchCL").css('background-color', '#fff');
							    	  var records = $scope.noofrecordssubmittedalert;
								      var url = "/api/alert/listSubmittedAlerts/NoofRecords/"+records+"/pageoffset/0";
								      $http({
						                    method: 'GET',
						                    url: url
						                }).success(function(response){
						                	//alert(" in alert");
						                    if(response.value.error == false){
						                        $scope.allAlertsSubmittedalert = response.value.result[0];
						                        insertPaging(response.value.result[1][0].TotalRows, 6, $scope.noofrecordssubmittedalert);
						                        //insertPaging(10);
						                    }
						                    else{
						                        alert(response.value.message);
						                    }
						                }).error(function(err){
						                    alert(err.value.message);
						                });  
							    
							   };
							   
							   $scope.listalertsumittedrecords = function(){
					            	var records = $scope.noofrecordssubmittedalert;
					            	var offset = 0;
					            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
					            		offset = (parseInt(curPage) - 1) * parseInt(records);
					            	}
					            	else{
										offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);}

					            	var url = "/api/alert/listSubmittedAlerts/NoofRecords/"+records+"/pageoffset/"+offset;
					                $http({
					                    method: 'GET',
					                    url: url
					                }).success(function(response){
					                    if(response.value.error == false){
					                        $scope.allAlertsSubmittedalert = response.value.result[0];
					                        insertPaging(response.value.result[1][0].TotalRows, 6, $scope.noofrecordssubmittedalert);
					                    }
					                    else{
					                        alert(response.value.message);
					                    }
					                }).error(function(err){
					                    alert(err.value.message);
					                });
					            };
					            
					            
						         $scope.listAlertsByBuilfrClient=function()
						         {

								      $("#alertsSubmittedClient").hide();
								      $("#alertsListClient").hide();
								      $("#alertsListByBuilding").hide();
								      $("#alertsListByBuildingFrClient").show();
								      $("#divSearchAlert").hide(); 
								      $(".searchDataGrid").hide();
								      $("#divSearchAlertGuard").hide(); 
					 				var html = 'Home <span style="padding-left: 2px"><a href="#">';
								      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
								      $(".BreadCrumColumn")[0].innerHTML = html;
								      $("#tdbyBuilClient").css('background-color', '#ffe4b2');
								      $("#tdSubmittedAlert").css('background-color', '#fff');
								      $("#tddetailsClient").css('background-color', '#fff');
								      $("#tdsearchCL").css('background-color', '#fff');
								      
					 				var url = "/api/alert/getBuildingidForClient";
						             $http({
						                 method: 'GET',
						                 url: url
						             }).success(function(response){
						            	// alert("in testing");
						                 if(response.value.error == false){
						                 	$scope.buildingsbyclient = response.value.result[0];
						                 	//$scope.buildingsEdit = 1;
						                 }
						                 else{
						                     alert(response.value.message);
						                 }
						             }).error(function(err){
						                 alert(err.value.message);
					             });
						         };
						         
						       //guard scripts starts
						         // list alerts by builiding for guard
						         
						         $scope.listAlertsbybuildG=function()
						         {	 
						        	 $(".divsubmitbuildingalertgrid").hide();
						        	 $("#alertsByGuardBuild").show();
						        	 $("#alertsSubmittedByGuard").hide();
						        	 $("#alertsListByBuilding").hide();
						        	 $("#divSearchAlert").hide();
						        	 $(".searchDataGrid").hide();
						        	 $("#divSearchAlertGuard").hide(); 
					 				var html = 'Home <span style="padding-left: 2px"><a href="#">';
								      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
								      $(".BreadCrumColumn")[0].innerHTML = html;
								      $("#tddetailsGuard").css('background-color', '#ffe4b2');
								      $("#tdSubmittedAlertG").css('background-color', '#fff');
								      $("#tdsearchGRD").css('background-color', '#fff');
								      
						         };
						         
						         $scope.listByBuildingGuard=function()
						         {	
						        	 curPage = 1;
						        	 var selbuildingid=$scope.selbuildingid;
						        	 var records = $scope.noofrecordsDetailsguard; 
						        	 
						        	 var url="/api/alert/listbyBuilding/selbuildingid/"+selbuildingid+"/NoofRecords/"+records+"/pageoffset/0";
						        	 $http({
						        		method:'GET',
						        		url:url
						        	 }).success(function(response){
						        		 		//alert(" in success guard!");
						        		         if(response.value.error == false){
							                        $scope.allAlertsListguard = response.value.result[0];
							                        insertPaging(response.value.result[1][0].TotalRows, 7, $scope.noofrecordsDetailsguard);
										        	 $(".divsubmitbuildingalertgrid").show();
							                    }
							                    else{
							                        alert(response.value.message);
							                    }
							                }).error(function(err){
							                    alert(err.value.message);
							                });
						         };
						         
						         $scope.listalertbyguardbuild=function()
						         {
						        	 var offset = 0;
						        	 var records = $scope.noofrecordsDetailsguard;
						            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
						            		offset = (parseInt(curPage) - 1) * parseInt(records);
						            	}
						            	else{
											offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);

						            	}
						        	 var selbuildingid=$scope.selbuildingid;
						            	//alert(" records "+records);
						            	var url = "/api/alert/listbyBuilding/selbuildingid/"+selbuildingid+"/NoofRecords/"+records+"/pageoffset/"+offset;
						                $http({
						                    method: 'GET',
						                    url: url
						                }).success(function(response){
						                    if(response.value.error == false){
						                        $scope.allAlertsListguard = response.value.result[0];
						                        insertPaging(response.value.result[1][0].TotalRows, 7, $scope.noofrecordsDetailsguard);
						                    }
						                    else{
						                        alert(response.value.message);
						                    }
						                }).error(function(err){
						                    alert(err.value.message);
						                });
						        	 
						         };
						         
						         $scope.submitAlert=function(index){						        	 
						        	 curPage = 1;
						        	var subalertid = $scope.allAlertsListguard[index].id;
						        	var selbuildingid=$scope.selbuildingid;
						        	var url="/api/alert/submitAlert";
						        	$http({
						        		method:'POST',
						        		url:url,
						        		data:{"subalertid":subalertid}
						        	}).success(function(response){
					                    if(response.value.error == false){
					                        //alert(response.value.result);
					                        var records = $scope.noofrecordsDetailsguard;
							            	var url = "/api/alert/listbyBuilding/selbuildingid/"+selbuildingid+"/NoofRecords/"+records+"/pageoffset/0";
							                $http({
							                    method: 'GET',
							                    url: url
							                }).success(function(response){
							                    if(response.value.error == false){
							                        $scope.allAlertsListguard = response.value.result[0];
							                        insertPaging(response.value.result[1][0].TotalRows,7 , $scope.noofrecordsDetailsguard);
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
					            // list the submitted alerts
						            $scope.listSubmittedAlertGuard= function(){
						            	curPage = 1;
									      $("#alertsByGuardBuild").hide();
								          $("#alertsSubmittedByGuard").show();
									      $("#alertsListByBuilding").hide();
									      $("#divSearchAlert").hide();
									      $(".searchDataGrid").hide();
									      $("#divSearchAlertGuard").hide(); 
									      var html = 'Home <span style="padding-left: 2px"><a href="#">';
									      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
									      $(".BreadCrumColumn")[0].innerHTML = html;
									      $("#tddetailsGuard").css('background-color', '#fff');
									      $("#tdSubmittedAlertG").css('background-color', '#ffe4b2');
									      $("#tdsearchGRD").css('background-color', '#fff');
									      $("#tdsearchCL").css('background-color', '#fff');
									    	  var records = $scope.noofrecordssubmittedalertguard;
										      var url = "/api/alert/listSubmittedAlertsGuard/NoofRecords/"+records+"/pageoffset/0";
										      $http({
								                    method: 'GET',
								                    url: url
								                }).success(function(response){
								                	//alert(" in alert of submitted alerts");
								                    if(response.value.error == false){
								                        $scope.allsubmitAlertsList = response.value.result[0];
								                        insertPaging(response.value.result[1][0].TotalRows, 8, $scope.noofrecordssubmittedalertguard);
								                        //insertPaging(10);
								                    }
								                    else{
								                        alert(response.value.message);
								                    }
								                }).error(function(err){
								                    alert(err.value.message);
								                });  
									    
									   };
									   
									   $scope.listalertsubmitbyguard= function(){
										   //alert(" in listalertsumittedrecords()");
							            	var records = $scope.noofrecordssubmittedalertguard;
							            	var offset = 0;
							            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
							            		offset = (parseInt(curPage) - 1) * parseInt(records);
							            	}
							            	else{
												offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);}

							            	var url = "/api/alert/listSubmittedAlertsGuard/NoofRecords/"+records+"/pageoffset/"+offset;
							                $http({
							                    method: 'GET',
							                    url: url
							                }).success(function(response){
							                    if(response.value.error == false){
							                        $scope.allsubmitAlertsList = response.value.result[0];
							                        insertPaging(response.value.result[1][0].TotalRows, 8, $scope.noofrecordssubmittedalertguard);
							                    }
							                    else{
							                        alert(response.value.message);
							                    }
							                }).error(function(err){
							                    alert(err.value.message);
							                });
							            };
			            //end guard scripts
					
					   //search for alert
							            $scope.searchalert = function(){
							            	//alert(" in funn");
							            	curPage = 1;
							            	$scope.searchAlertName = undefined;
						   	    			$scope.searchguardid = undefined;
						   	    			$scope.searchclientid = undefined;
						   	    			$scope.searchBuilding = undefined;
						   	    			$scope.searchseverity = undefined;
						   	    			$scope.searchStartDate = undefined;
						   	    			$scope.allAlertsList="";
						   	    			$("#searchDataGrid").hide();
							            	$(".gridalertbuilding").hide();
							            	$(".gridalertclients").hide();
							            	if(roleid=='2')
						            		{
							            	$("#divSearchAlert").show(); 
							            	$("#divSearchAlertGuard").hide(); 
						            		$("#searchclientid").attr('disabled','disabled');
						            		$("#tdsearchCL").css('background-color', '#ffe4b2');
						            		//alert(" in searhhhh"+buildinglistclient);
						            		$scope.buildingslist=buildinglistclient;
						            		}
						            	  if(roleid=='3')
						            		{
						            		$("#divSearchAlertGuard").show();
						            		$("#divSearchAlert").hide(); 
						            		$("#searchguardid").attr('disabled','disabled');
						            		$("#tdsearchGRD").css('background-color', '#ffe4b2');
						            		
						            		}
						            	  if(roleid=='1')
						            		{
						            		  //alert("my role is 1");
						            		$("#divSearchAlert").show(); 
						            		$("#divSearchAlertGuard").hide(); 
						            		$("#tdsearch").css('background-color', '#ffe4b2');
						            		}	
							            	 $("#alertsListByBuildingFrClient").hide();
								        	 $("#alertsSubmittedClient").hide();
										     $("#alertsListClient").hide();
								        	 $("#divAddAlert").hide();
							 				 $("#divAlertDetails").hide();
							 				 $("#divDeleteAlert").hide();
							 				 $("#alertsSubmittedByGuard").hide();
							 				 $("#alertsListByClientForAdmin").hide();
							 				 $("#alertsByGuardBuild").hide();
							 				 $("#alertsListByBuilding").hide();
							 				 $("#alertsListByBuildingFrClient").hide();
							 				 //("#divSearchAlertGuard").show();
											   var html = 'Home <span style="padding-left: 2px"><a href="#">';
										      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Alert Module';
										      html += ' <span style="padding-left: 2px"><a href="#">';
										      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Search Alert';
										      $(".BreadCrumColumn")[0].innerHTML = html;
										      $("#tddelete").css('background-color', '#fff');
										      $("#tdadd").css('background-color', '#fff');
										      $("#tdedit").css('background-color', '#fff');
										      $("#tddetails").css('background-color', '#fff');
										      $("#tddetailsGuard").css('background-color', '#fff');
										      $("#tdSubmittedAlertG").css('background-color', '#fff');
										      $("#tdbyBuilClient").css('background-color', '#fff');
										      $("#tdSubmittedAlert").css('background-color', '#fff');
										      $("#tddetailsClient").css('background-color', '#fff');
										      $("#tdbyBuildAdm").css('background-color', '#fff');
											  $("#tdbyClientAdm").css('background-color', '#fff');
											     
										     };
										     
										   $scope.searchAlertInfo=function(){
											   curPage=1;
											   var records = $scope.noofrecordsSearch;
											   var paramStr="roleid/"+roleid+"/searchAlertName/"+$scope.searchAlertName+"/searchguardid/"+$scope.searchguardid+"/searchclient/"+$scope.searchclientid+
											   "/searchBuilding/"+$scope.searchBuilding+"/searchseverity/"+$scope.searchseverity+"/searchStartDate/"+$scope.searchStartDate;    
											   var url = "/api/alert/searchAlert/"+paramStr+"/NoofRecords/"+records+"/pageoffset/0";
											  
								                $http({
								                    method: 'GET',
								                    url: url
								                }).success(function(response){
								                	//alert("in client search");
								                	if(response.rows!="none"){
								                		//alert(" searchinggg");
								        	            var resp= JSON.parse(JSON.stringify(response.value));
								        	            console.log(resp);
								        	            //alert(resp);
								        	            
								        	            
								        	            if(roleid=='3'){
								        	            	//alert(" in search role 3");
								        	            	$(".searchDataGrid").show();
								        	            	$scope.searchAlertListGuard=resp; 
								        	            	insertPaging(response.totalrows[0].TotalRows, 9, $scope.noofrecordsSearch);
								        	            }
								        	            else{
								        	            	$(".searchDataGrid").show();
								        	            	$scope.searchAlertList=resp; 
								        	            	insertPaging(response.totalrows[0].TotalRows, 9, $scope.noofrecordsSearch);
								        	            }
								        	            
								        	         }
								                }).error(function(err){
								                    alert(err);
								                });
								                
										   };
										   
										   
										   $scope.searchAlertrecords=function()
										   {   var offset = 0;
											   var records = $scope.noofrecordsSearch;
								            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
								            		offset = (parseInt(curPage) - 1) * parseInt(records);
								            	}
								            	else{
													offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
												}
											   
											   var paramStr="/roleid/"+roleid+"/searchAlertName/"+$scope.searchAlertName+"/searchguardid/"+$scope.searchguardid+"/searchclient/"+$scope.searchclientid+
											   "/searchBuilding/"+$scope.searchBuilding+"/searchseverity/"+$scope.searchseverity+"/searchStartDate/"+$scope.searchStartDate;    
											   var url = "/api/alert/searchAlert"+paramStr+"/NoofRecords/"+records+"/pageoffset/"+offset;
											   
								                $http({
								                    method: 'GET',
								                    url: url
								                }).success(function(response){
								                	if(response.rows!="none"){
								                		//alert(" searchinggg");
								        	            var resp= JSON.parse(JSON.stringify(response.value));
								        	            console.log(resp);
								        	            //alert(resp);
								        	            
								        	            
								        	            if(roleid=='3'){
								        	            	
								        	            	$(".searchDataGrid").show();
								        	            	$scope.searchAlertListGuard=resp; 
								        	            	insertPaging(response.totalrows[0].TotalRows, 9, $scope.noofrecordsSearch);
								        	            }
								        	            else{
								        	            	$(".searchDataGrid").show();
								        	            	$scope.searchAlertList=resp; 
								        	            	insertPaging(response.totalrows[0].TotalRows, 9, $scope.noofrecordsSearch);
								        	            }
								        	            
								        	         }
								                }).error(function(err){
								                    alert(err);
								                });  
											   
										   };
										   
										   
										   $scope.resetSearchAttribute = function(){
												$scope.searchAlertName = undefined;
							   	    			$scope.searchguardid = undefined;
							   	    			$scope.searchclientid = undefined;
							   	    			$scope.searchBuilding = undefined;
							   	    			$scope.searchseverity = undefined;
							   	    			$scope.searchStartDate = undefined;
							   	    			$scope.allAlertsList="";
							   	    			$("#searchDataGrid").hide();
								            };
								            
								            $scope.listBuildingsByClientSearch=function()
								            {
								            	//alert(" in the list fo bu");
								            	var bclient = $scope.searchclientid;
								            	var url = "/api/alert/buildingsByClient/bclient/"+bclient;
								                $http({
								                    method: 'GET',
								                    url: url
								                }).success(function(response){
								                    if(response.value.error == false){
								                        $scope.buildingslist = response.value.result[0];
								                        //insertPaging(response.value.result[1][0].totalrows);
								                    }
								                    else{
								                        alert(response.value.message);
								                    }
								                }).error(function(err){
								                    alert(err.value.message);
								                });
								             
								            }
								            $scope.listBuildingsByClient=function()
								            {
								            	//alert(" in the list fo bu");
								            	var bclient = $scope.newclientid;
								            	var url = "/api/alert/buildingsByClient/bclient/"+bclient;
								                $http({
								                    method: 'GET',
								                    url: url
								                }).success(function(response){
								                    if(response.value.error == false){
								                        $scope.buildingslist = response.value.result[0];
								                        //insertPaging(response.value.result[1][0].totalrows);
								                    }
								                    else{
								                        alert(response.value.message);
								                    }
								                }).error(function(err){
								                    alert(err.value.message);
								                });
								             
								            };
								            
// changes for guard details starts here
								            
								            $scope.getDetail=function(val)
								            {
								            	//alert(val);
								            	var url = "/api/alert/getGuardDetail/guardid/"+val;
								            	//alert(url);
								                $http({
								                    method: 'GET',
								                    url: url
								                }).success(function(response){
								                    if(response.value.error == false){
								                    	//alert(" in");
								                    	$("#guardInformation").show();
								                        $scope.guardDetaillist = response.value.result[0];
								                        //alert($scope.guardFirstName);
								                        //insertPaging(response.value.result[1][0].totalrows);
								                    }
								                    else{
								                        alert(response.value.message);
								                    }
								                }).error(function(err){
								                    alert(err.value.message);
								                });
								            	
								            };
											
								            $scope.hideDetails=function()
								            {
								            	$("#guardInformation").hide();
								            };
								            
									   }
						         
									   