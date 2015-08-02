
function removeErrorClass(id){
	$("#"+id).removeClass('errorInput');
}

function guardmodule($scope,$http) {   
			// load buildings
		     
		     var url = "/api/building/getallbuildings";
		              $http({
		                  method: 'GET',
		                  url: url
		              }).success(function(response){
		                  if(response.value.error == false){
		                  	$scope.buildings = response.value.result[0];
		                  	console.log($scope.buildings);
		                  	//$scope.buildingsEdit = 1;
		                  }
		                  else{
		                      alert(response.value.message);
		                  }
		              }).error(function(err){
		                  alert(err.value.message);
		     });
		              
		              
	        roleid = localStorage.getItem("roleid");
			if(roleid == "3"){
				$("#tdbuilding").hide();
				$("#tdadd").hide();
				$("#tddelete").hide();
				$("#tdaddline").hide();
				$("#tddeleteline").hide();
				$("#tdsearch").hide();
				$("#editDivforGuard").show();
				$("#guardDetailsForGuard").show();
         	    
             	
			}
			else if(roleid == "2"){
				$("#tdbuilding").hide();
        	}
        	else{
        		$("#tdbuilding").show();
        		$("#editDivForGuardAdmin").show();
        		$("#guardDetailsForAdmin").show();
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
			
			$scope.statuslist = {
			        data: [{
			            statusid: 'Yes',
			            statusname: 'Yes'
			        }, {
			        	statusid: 'No',
			        	statusname: 'No'
			        }]
			    };
			
			
			    $scope.noofrecordsDetails = '10';
			    $scope.noofrecordsDelete = '10';
			    $scope.noofrecordsSearchDetails = '10';
			    
			    $("#divGuardDetails").show();
			    $("#divAddGuard").hide();
			    $("#divEditGuard").hide();
			    $("#divDeleteGuard").hide();  
			    $("#divSearchGuard").hide();
			    $("#tddelete").css('background-color', '#fff');
			    $("#tdadd").css('background-color', '#fff');
			    $("#tdedit").css('background-color', '#fff');
			    $("#tdsearch").css('background-color', '#fff');
			    $("#tddetails").css('background-color', '#ffe4b2');
				
			    if(roleid=="3"){
			    	  var url = "/api/guard/getGuardDetails/";
			    	  $http({
		                    method: 'GET',
		                    url: url
		                }).success(function(response){
		                    if(response.value.error == false){
		                        $scope.allGuardsList = response.value.result[0];
		                        //insertPaging(response.value.result[1][0].totalrows);
		                        //insertPaging(10);
		                    }
		                    else{
		                        alert(response.value.message);
		                    }
		                }).error(function(err){
		                    alert(err.value.message);
		                });
			      }else{
			    	  var records = $scope.noofrecordsDetails;
				      var url = "/api/guard/getAllGuardDetails/NoofRecords/"+records+"/pageoffset/0";
				      $http({
		                    method: 'GET',
		                    url: url
		                }).success(function(response){
		                    if(response.value.error == false){
		                        $scope.allGuardsList = response.value.result[0];
		                        insertPaging(response.value.result[1][0].totalrows, 1, $scope.noofrecordsDetails);
		                        //insertPaging(10);
		                    }
		                    else{
		                        alert(response.value.message);
		                    }
		                }).error(function(err){
		                    alert(err.value.message);
		                });
			      } 
			      
			      
			   //Start For guardDetails Div
			   $scope.getguarddetails = function(){
				   curPage = 1;
			      $("#divGuardDetails").show();
			      $("#divAddGuard").hide();
			      $("#divEditGuard").hide();
			      $("#divDeleteGuard").hide();  
			      $("#divSearchGuard").hide();
			      var html = 'Home <span style="padding-left: 2px"><a href="#">';
			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Guard Module';
			      $(".BreadCrumColumn")[0].innerHTML = html;
			      $("#tddelete").css('background-color', '#fff');
			      $("#tdadd").css('background-color', '#fff');
			      $("#tdedit").css('background-color', '#fff');
			      $("#tddetails").css('background-color', '#ffe4b2');
			      $("#tdsearch").css('background-color', '#fff');
			      //start search models
			      $scope.searchFirstName = undefined;
 	    		  $scope.searchState = undefined;
 	    		  $scope.searchLastName = undefined;
 	    		  $scope.searchCity = undefined;
 	    		  $scope.searchZipCode = undefined;
 	    		  $scope.searchGuardNo = undefined;
 	    		  $scope.searchStartDate = undefined;
 	    		  $scope.searchBuilding = undefined;
 	    		  $scope.searchStatus = undefined;
 	    		  $scope.searchEndDate = undefined;
 	    		  $("#searchDataGrid").hide();
 	    		  //end search model
			      if(roleid=="3"){
			    	  var url = "/api/guard/getGuardDetails/";
			    	  $http({
		                    method: 'GET',
		                    url: url
		                }).success(function(response){
		                    if(response.value.error == false){
		                        $scope.allGuardsList = response.value.result[0];
		                        //insertPaging(response.value.result[1][0].totalrows);
		                        //insertPaging(10);
		                    }
		                    else{
		                        alert(response.value.message);
		                    }
		                }).error(function(err){
		                    alert(err.value.message);
		       }); 
			      }else{
			    	  var records = $scope.noofrecordsDetails;
				      var url = "/api/guard/getAllGuardDetails/NoofRecords/"+records+"/pageoffset/0";
				      $http({
		                    method: 'GET',
		                    url: url
		                }).success(function(response){
		                    if(response.value.error == false){
		                        $scope.allGuardsList = response.value.result[0];
		                        insertPaging(response.value.result[1][0].totalrows, 1, $scope.noofrecordsDetails);
		                        //insertPaging(10);
		                    }
		                    else{
		                        alert(response.value.message);
		                    }
		                }).error(function(err){
		                    alert(err.value.message);
		                });  
			      }    
			    
			   };
			   
			   $scope.getguardrecordsfordisplay = function(){
	            	var records = $scope.noofrecordsDetails;
	            	var url = "/api/guard/getAllGuardDetails/NoofRecords/"+records+"/pageoffset/0";
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.allGuardsList = response.value.result[0];
	                        insertPaging(response.value.result[1][0].totalrows, 1, $scope.noofrecordsDetails);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                });
	            };
			  
	            $scope.showDetails=function(index){
	            var guardid=$scope.allGuardsList[index].guardid;
	       		 var url = "/api/guard/getWeeklySchedule/guardid/"+guardid;
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.weeklyScheduleList = response.value.result[0];
	                        ShowPopUpWindow("divGuardgrid", "Guard Details", 230, 900);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                });
	            };     
	            //End details div
	            
			   //For guardAdd Div
			   $scope.addguard = function(){
			   $("#divAddGuard").show();
				  $("#divGuardDetails").hide();
				  $("#divEditGuard").hide();
				  $("#divDeleteGuard").hide();
				  $("#divSearchGuard").hide();
				   var html = 'Home <span style="padding-left: 2px"><a href="#">';
			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Guard Module';
			      html += ' <span style="padding-left: 2px"><a href="#">';
			      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Add Guard';
			      $(".BreadCrumColumn")[0].innerHTML = html;
			      $("#tddelete").css('background-color', '#fff');
			      $("#tdadd").css('background-color', '#ffe4b2');
			      $("#tdedit").css('background-color', '#fff');
			      $("#tddetails").css('background-color', '#fff');
			      $("#tdsearch").css('background-color', '#fff');
			      $scope.newStatus='No';
			      //start search models
			      $scope.searchFirstName = undefined;
 	    		  $scope.searchState = undefined;
 	    		  $scope.searchLastName = undefined;
 	    		  $scope.searchCity = undefined;
 	    		  $scope.searchZipCode = undefined;
 	    		  $scope.searchGuardNo = undefined;
 	    		  $scope.searchStartDate = undefined;
 	    		  $scope.searchBuilding = undefined;
 	    		  $scope.searchStatus = undefined;
 	    		  $scope.searchEndDate = undefined;
 	    		  $("#searchDataGrid").hide();
 	    		  //end guard models
			   };
			   
			   $scope.createGuard = function(){
	            	var url = "/api/guard/createGuard";
	            	var newzipcodepattern=new RegExp('(^[0-9]{5}$)|(^[0-9]{5}-[0-9]{4}$)');
	            	var newphonenumberpattern=new RegExp('(^[0-9]{10}$)|(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)');
	            	var newguardnopattern=new RegExp('(^[0-9]{3}-[0-9]{2}-[0-9]{4}$)');
	            	var statepattern=new RegExp('AL|Alabama|AK|Alaska|AZ|Arizona|AR|Arkansas|CA|California|CO|Colorado|CT|Connecticut|DE|Delaware|FL|Florida|GA|Georgia|HI|Hawaii|ID|Idaho|IL|Illinois|IN|Indiana|IA|Iowa|KS|Kansas|KY|Kentucky|LA|Louisiana|ME|Maine|MD|Maryland|MA|Massachusetts|MI|Michigan|MN|Minnesota|MS|Mississippi|MO|Missouri|MT|Montana|NE|Nebraska|NV|Nevada|NH|New Hampshire|NJ|New Jersey|NM|New Mexico|NY|New York|NC|North Carolina|ND|North Dakota|OH|Ohio|OK|Oklahoma|OR|Oregon|PA|Pennsylvania|RI|Rhode Island|SC|South Carolina|SD|South Dakota|TN|Tennessee|TX|Texas|UT|Utah|VT|Vermont|VA|Virginia|WA|Washington|WV|West Virginia|WI|Wisconsin|WY|Wyoming');
	            	if($scope.newFirstName == "" || $scope.newFirstName == undefined){
	            		showErrorControl("Please enter a First Name!!", "newFirstName");
	            		return false;
	            	}
	            	else if($scope.newAddress == "" || $scope.newAddress == undefined){
	            		showErrorControl("Please enter a Address!!", "newAddress");
	            		return false;
	            	}
	            	else if($scope.newState == "" || $scope.newState == undefined){
	            		showErrorControl("Please enter a State!!", "newState");
	            		return false;
	            	}
	            	else if(!statepattern.test($scope.newState)){
	            		showErrorControl("Please enter a valid US State in the format like TX or Texas!!", "newState");
	            		return false;
	            	}
	            	else if($scope.newEmail == "" || $scope.newEmail == undefined){
	            		showErrorControl("Please enter a Email!!", "newEmail");
	            		return false;
	            	}
	            	else if($scope.newLastName == "" || $scope.newLastName == undefined){
	            		showErrorControl("Please enter a Last Name!!", "newLastName");
	            		return false;
	            	}
	            	else if($scope.newCity == "" || $scope.newCity == undefined){
	            		showErrorControl("Please enter a City!!", "newCity");
	            		return false;
	            	}
	            	else if($scope.newzipCode == "" || $scope.newzipCode == undefined){
	            		showErrorControl("Please enter a Zip Code!!", "newzipCode");
	            		return false;
	            	}else if(!newzipcodepattern.test($scope.newzipCode)){
	            		showErrorControl("Please enter a Zip Code in valid format like 12345 or 12345-6789!!", "newzipCode");
	            		return false;
	            	}
	            	else if($scope.newNumber == "" || $scope.newNumber == undefined){
	            		showErrorControl("Please enter a Contact Number!!", "newNumber");
	            		return false;
	            	}else if(!newphonenumberpattern.test($scope.newNumber)){
	            		showErrorControl("Please enter a Phone Number in valid format like 1234567890 or 123-456-7890!!", "newNumber");
	            		return false;
	            	}
	            	else if($scope.newGuardNo == "" || $scope.newGuardNo == undefined){
	            		showErrorControl("Please enter a Guard Number!!", "newGuardNo");
	            		return false;
	            	}else if(!newguardnopattern.test($scope.newGuardNo)){
	            		showErrorControl("Please enter a Guard Number in valid format like 123-45-6789!!", "newGuardNo");
	            		return false;
	            	}
	            	else if($scope.newBuilding != null && $scope.newBuilding != "" && $scope.newBuilding != undefined&&($("#newStartDate").val() == "" || $("#newStartDate").val() == undefined)){
	            		showErrorControl("Please enter a Start Date!!", "newStartDate");
	            		return false;
	            	}
	            	else if($scope.newBuilding != null&&$scope.newBuilding != "" && $scope.newBuilding != undefined &&($("#newEndDate").val() == "" || $("#newEndDate").val() == undefined)){
	            		showErrorControl("Please enter a End Date!!", "newEndDate");
	            		return false;
	            	}
	            	var from = new Date(document.getElementById("newStartDate").value);
	                var to = new Date(document.getElementById("newEndDate").value);
	                var days=parseInt((to - from) / (24 * 3600 * 1000));
	                var hours=days*9;
	                if(to<=from){
	            		showErrorControl("End Date must be greater than Start Date!!", "newEndDate");
	            		return false;
	            	}
	            	
	            	$http({
	                    method: 'POST',
	                    url: url,
	                    data:
	                    {
	                    	"newFirstName":$scope.newFirstName,
	    	    			"newAddress":$scope.newAddress,
	    	    			"newState":$scope.newState,
	    	    			"newEmail":$scope.newEmail,
	    	    			"newLastName":$scope.newLastName,
	    	    			"newCity":$scope.newCity,
	    	    			"newzipCode":$scope.newzipCode,
	    	    			"newNumber":$scope.newNumber,
	    	    			"newGuardNo":$scope.newGuardNo,
	    	    			"newStartDate":$("#newStartDate").val(),
	    	    			"newBuildingId":$scope.newBuilding,
	    	    			"newBuildingName": $("#newBuilding option:selected")[0].innerHTML,
	    	    			"newStatus":$scope.newStatus,
	    	    			"newEndDate":$("#newEndDate").val(),
	    	    			"newWorkingHours":hours
	                    	
	                    }
	                }).success(function(response){
	                    if(response.value.error == false){
	                        alert(response.value.result);
	                        $scope.newFirstName = "";
	    	    			$scope.newAddress = "";
	    	    			$scope.newState = "";
	    	    			$scope.newEmail = "";
	    	    			$scope.newLastName = "";
	    	    			$scope.newCity = "";
	    	    			$scope.newzipCode = "";
	    	    			$scope.newNumber = "";
	    	    			$scope.newGuardNo = "";
	    	    			$scope.newStartDate = "";
	    	    			$scope.newBuilding = "";
	    	    			$scope.newStatus = "";
	    	    			$scope.newEndDate = "";
	                    }
	                    else{
	                        alert("duplicate guard");
	                    }
	                }).error(function(err){
	                	console.log(err);
	                	alert("duplicate guard");
	                });
	            };
	            
	            $scope.resetAddAttribute = function(){
	            	$scope.newFirstName = "";
	    			$scope.newAddress = "";
	    			$scope.newState = "";
	    			$scope.newEmail = "";
	    			$scope.newLastName = "";
	    			$scope.newCity = "";
	    			$scope.newzipCode = "";
	    			$scope.newNumber = "";
	    			$scope.newGuardNo = "";
	    			$scope.newStartDate = "";
	    			$scope.newBuilding = "";
	    			$scope.newStatus = "";
	    			$scope.newEndDate = "";
	    			
	            };
			   
			   //End add div
			   //Start For guardDelete Div
			   $scope.deleteguard = function(){
				   curPage = 1;
			       $("#divDeleteGuard").show();
				   $("#divGuardDetails").hide();
				   $("#divAddGuard").hide();
				   $("#divEditGuard").hide();
				   $("#divSearchGuard").hide();
				 //start search models
				      $scope.searchFirstName = undefined;
	 	    		  $scope.searchState = undefined;
	 	    		  $scope.searchLastName = undefined;
	 	    		  $scope.searchCity = undefined;
	 	    		  $scope.searchZipCode = undefined;
	 	    		  $scope.searchGuardNo = undefined;
	 	    		  $scope.searchStartDate = undefined;
	 	    		  $scope.searchBuilding = undefined;
	 	    		  $scope.searchStatus = undefined;
	 	    		  $scope.searchEndDate = undefined;
	 	    		  $("#searchDataGrid").hide();
	 	    		  //end guard models
				   var html = 'Home <span style="padding-left: 2px"><a href="#">';
			                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Guard Module';
			                html += ' <span style="padding-left: 2px"><a href="#">';
			                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Delete Guard';
			                $(".BreadCrumColumn")[0].innerHTML = html;
			                $("#tddelete").css('background-color', '#ffe4b2');
			                $("#tdadd").css('background-color', '#fff');
			                $("#tdedit").css('background-color', '#fff');
			                $("#tddetails").css('background-color', '#fff');
			                $("#tdsearch").css('background-color', '#fff');
			                var records = $scope.noofrecordsDelete;
			            	var url = "/api/guard/getAllGuardDetails/NoofRecords/"+records+"/pageoffset/0";
			                $http({
			                    method: 'GET',
			                    url: url
			                }).success(function(response){
			                    if(response.value.error == false){
			                        $scope.deleteGuardsList = response.value.result[0];
			                        insertPaging(response.value.result[1][0].totalrows, 1, $scope.noofrecordsDelete);
			                    }
			                    else{
			                        alert(response.value.message);
			                    }
			                }).error(function(err){
			                    alert(err.value.message);
			                });
			                
			   };
			   
			   $scope.removeGuard=function(index){
				   var r = confirm("Are you sure you want to delete this guard");
				   if (r == true) {
					    var url = "/api/guard/deleteGuard/guardid/" + $scope.deleteGuardsList[index].guardid;
		                $http({
		                    method: 'DELETE',
		                    url: url
		                }).success(function(response){
		                    if(response.value.error == false){
		                        alert(response.value.result);
		                        var records = $scope.noofrecordsDelete;
				            	var url = "/api/guard/getAllGuardDetails/NoofRecords/"+records+"/pageoffset/0";
				                $http({
				                    method: 'GET',
				                    url: url
				                }).success(function(response){
				                    if(response.value.error == false){
				                        $scope.deleteGuardsList = response.value.result[0];
				                        curPage = 1;
				                        insertPaging(response.value.result[1][0].totalrows, 1, $scope.noofrecordsDelete);
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
			   
			   $scope.getguardrecordsfordelete = function(){
	            	var records = $scope.noofrecordsDelete;
	            	var url = "/api/guard/getAllGuardDetails/NoofRecords/"+records+"/pageoffset/0";
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.deleteGuardsList = response.value.result[0];
	                        insertPaging(response.value.result[1][0].totalrows, 1, $scope.noofrecordsDelete);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                });
	            };
	            //End delete div
	            //Start edit div
	            $scope.editguard = function(){
					   $("#divEditGuard").show();
						   $("#divGuardDetails").hide();
						   $("#divAddGuard").hide();
						   $("#divDeleteGuard").hide();  
						   $("#divSearchGuard").hide();
						 //start search models
						      $scope.searchFirstName = undefined;
			 	    		  $scope.searchState = undefined;
			 	    		  $scope.searchLastName = undefined;
			 	    		  $scope.searchCity = undefined;
			 	    		  $scope.searchZipCode = undefined;
			 	    		  $scope.searchGuardNo = undefined;
			 	    		  $scope.searchStartDate = undefined;
			 	    		  $scope.searchBuilding = undefined;
			 	    		  $scope.searchStatus = undefined;
			 	    		  $scope.searchEndDate = undefined;
			 	    		  $("#searchDataGrid").hide();
			 	    		  //end guard models
						   var html = 'Home <span style="padding-left: 2px"><a href="#">';
					                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Guard Module';
					                html += ' <span style="padding-left: 2px"><a href="#">';
					                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Edit Guard';
					                $(".BreadCrumColumn")[0].innerHTML = html;
					                $("#tddelete").css('background-color', '#fff');
					                $("#tdadd").css('background-color', '#fff');
					                $("#tdedit").css('background-color', '#ffe4b2');
					                $("#tddetails").css('background-color', '#fff');
					                $("#tdsearch").css('background-color', '#fff');
					                var roleid = localStorage.getItem("roleid");
					               if(roleid=="3"){
					            	   var url = "/api/guard/getGuardInformation";
						                $http({
						                    method: 'GET',
						                    url: url
						                }).success(function(response){
						                    if(response.value.error == false){
						                    	$scope.editGuardFirstName=response.value.result[0][0].firstname;
					                    		$scope.editGuardAddress = response.value.result[0][0].address;
					        	    			$scope.editGuardState = response.value.result[0][0].state;
					        	    			$scope.editGuardEmail = response.value.result[0][0].email;
					        	    			$scope.editGuardLastName = response.value.result[0][0].lastname;
					        	    			$scope.editGuardCity = response.value.result[0][0].city;
					        	    			$scope.editGuardZipCode = response.value.result[0][0].zipcode;
					        	    			$scope.editGuardNumber = response.value.result[0][0].phonenumber;
					        	    			$scope.editGuardLatitude = response.value.result[0][0].latitude;
					        	    			$scope.editGuardLongitude = response.value.result[0][0].longitude;
					        	    			$scope.editGuardUserName = response.value.result[0][0].username;
					        	    			$scope.editGuardPassword = response.value.result[0][0].password;
					        	    			console.log($scope.editGuardPassword);
					        	    			$scope.oldPassword=$scope.editGuardPassword;
					        	    			console.log($scope.oldPassword);
					        	    			$scope.editGuardProfileId=response.value.result[0][0].profileid;
					        	    			$scope.editGuardUserId=response.value.result[0][0].userid;
					        	    			$scope.editGuardGuardId=response.value.result[0][0].guardid;
					        	    		}else{
						                        alert(response.value.message);
						                    }
						                }).error(function(err){
						                    alert(err.value.message);
						                });
						                }else{
						                	
					                var url = "/api/guard/getAllGuards";
					                $http({
					                    method: 'GET',
					                    url: url
					                }).success(function(response){
					                    if(response.value.error == false){
					                    	$scope.guardList = response.value.result[0];
					                    	
					                    }else{
					                        alert(response.value.message);
					                    }
					                }).error(function(err){
					                    alert(err.value.message);
					                });
					                }
					   };
	            //End edit div
	         	//Start edit div for admin 	                
	            $scope.updateGuard = function(){
	            	var url = "/api/guard/editGuard";
	            	var editzipcodepattern=new RegExp('(^[0-9]{5}$)|(^[0-9]{5}-[0-9]{4}$)');
	            	var editphonenumberpattern=new RegExp('(^[0-9]{10}$)|(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)');
	            	var statepattern=new RegExp('AL|Alabama|AK|Alaska|AZ|Arizona|AR|Arkansas|CA|California|CO|Colorado|CT|Connecticut|DE|Delaware|FL|Florida|GA|Georgia|HI|Hawaii|ID|Idaho|IL|Illinois|IN|Indiana|IA|Iowa|KS|Kansas|KY|Kentucky|LA|Louisiana|ME|Maine|MD|Maryland|MA|Massachusetts|MI|Michigan|MN|Minnesota|MS|Mississippi|MO|Missouri|MT|Montana|NE|Nebraska|NV|Nevada|NH|New Hampshire|NJ|New Jersey|NM|New Mexico|NY|New York|NC|North Carolina|ND|North Dakota|OH|Ohio|OK|Oklahoma|OR|Oregon|PA|Pennsylvania|RI|Rhode Island|SC|South Carolina|SD|South Dakota|TN|Tennessee|TX|Texas|UT|Utah|VT|Vermont|VA|Virginia|WA|Washington|WV|West Virginia|WI|Wisconsin|WY|Wyoming');
	            	
	            	if($scope.editFirstName == "" || $scope.editFirstName == undefined){
	            		showErrorControl("Please enter a First Name!!", "editFirstName");
	            		return false;
	            	}
	            	else if($scope.editAddress == "" || $scope.editAddress == undefined){
	            		showErrorControl("Please enter a Address!!", "editAddress");
	            		return false;
	            	}
	            	else if($scope.editState == "" || $scope.editState == undefined){
	            		showErrorControl("Please enter a State!!", "editState");
	            		return false;
	            	}
	            	else if(!statepattern.test($scope.editState)){
	            		showErrorControl("Please enter a valid US State in the format like TX or Texas!!", "editState");
	            		return false;
	            	}
	            	else if($scope.editEmail == "" || $scope.editEmail == undefined){
	            		showErrorControl("Please enter a Email!!", "editEmail");
	            		return false;
	            	}
	            	else if($scope.editLastName == "" || $scope.editLastName == undefined){
	            		showErrorControl("Please enter a Last Name!!", "editLastName");
	            		return false;
	            	}
	            	else if($scope.editCity == "" || $scope.editCity == undefined){
	            		showErrorControl("Please enter a City!!", "editCity");
	            		return false;
	            	}
	            	else if($scope.editzipCode == "" || $scope.editzipCode == undefined){
	            		showErrorControl("Please enter a Zip Code!!", "editzipCode");
	            		return false;
	            	}
	            	else if(!editzipcodepattern.test($scope.editzipCode)){
	            		showErrorControl("Please enter a Zip Code in valid format like 12345 or 12345-6789!!", "editzipCode");
	            		return false;
	            	}
	            	else if($scope.editNumber == "" || $scope.editNumber == undefined){
	            		showErrorControl("Please enter a Contact Number!!", "editNumber");
	            		return false;
	            	}
	            	else if(!editphonenumberpattern.test($scope.editNumber)){
	            		showErrorControl("Please enter a Phone Number in valid format like 1234567890 or 123-456-7890!!", "editNumber");
	            		return false;
	            	}
	            	else if($scope.editGuardNo == "" || $scope.editGuardNo == undefined){
	            		showErrorControl("Please enter a Guard Number!!", "editGuardNo");
	            		return false;
	            	}
	            	else if($scope.editBuilding != null&&$scope.editBuilding != "" && $scope.editBuilding != undefined&&($("#editStartDate").val() == "" || $("#editStartDate").val() == undefined)){
	            		showErrorControl("Please enter a Start Date!!", "editStartDate");
	            		return false;
	            	}
	            	else if($scope.editBuilding != null&&$scope.editBuilding != "" && $scope.editBuilding != undefined &&($("#editEndDate").val() == "" || $("#editEndDate").val() == undefined)){
	            		showErrorControl("Please enter a End Date!!", "editEndDate");
	            		return false;
	            	}
	            	
	            	
           	
	            	var from = new Date(document.getElementById("editStartDate").value);
	                var to = new Date(document.getElementById("editEndDate").value);
	                var days=parseInt((to - from) / (24 * 3600 * 1000));
	                var hours=days*9;
	            	if(to<=from){
	            		showErrorControl("End Date must be greater than Start Date!!", "editEndDate");
	            		return false;
	            	}
	                $http({
	                    method: 'POST',
	                    url: url,
	                    data:
	                    {
	                    	"editFirstName":$scope.editFirstName,
	    	    			"editAddress":$scope.editAddress,
	    	    			"editState":$scope.editState,
	    	    			"editEmail":$scope.editEmail,
	    	    			"editLastName":$scope.editLastName,
	    	    			"editCity":$scope.editCity,
	    	    			"editzipCode":$scope.editzipCode,
	    	    			"editNumber":$scope.editNumber,
	    	    			"editGuardNo":$scope.editGuardNo,
	    	    			"editStartDate":$('#editStartDate').val(),
	    	    			"editBuildingId":$scope.editBuilding,
	    	    			"editBuildingName": $("#editBuilding option:selected")[0].innerHTML,
	    	    			"editStatus":$scope.editStatus,
	    	    			"editEndDate":$('#editEndDate').val(),
	    	    			"editGuardId":$scope.editGuardVal,
	                		"editProfile":$scope.profileid,
	                		"editSchedule":$scope.scheduleid,
	                        "editWorkingHours":hours
	                    	
	                    }
	                }).success(function(response){
	                    if(response.value.error == false){
	                        alert(response.value.result);
	                        $scope.editFirstName = "";
	    	    			$scope.editAddress = "";
	    	    			$scope.editState = "";
	    	    			$scope.editEmail = "";
	    	    			$scope.editLastName = "";
	    	    			$scope.editCity = "";
	    	    			$scope.editzipCode = "";
	    	    			$scope.editNumber = "";
	    	    			$scope.editGuardNo = "";
	    	    			$('#editStartDate').val("");
	    	    			$scope.editBuilding = "";
	    	    			$scope.editStatus = "";
	    	    			$('#editEndDate').val("");
	    	    			$scope.editGuardVal="";
	                		$scope.profileid="";
	                		$scope.scheduleid="";
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err);
	                });
	            };
	            
	            $scope.getWeeklyScheduleForId=function(){
					   var url = "/api/guard/getWeeklyScheduleById/guardid/" + $scope.editGuardVal+"/buildingid/"+$scope.editBuilding;
					  $http({
		                    method: 'GET',
		                    url: url
		                }).success(function(response){
		                    if(response.value.error == false){
		                    	if(response.value.result[0].length > 0){
		                    		$scope.scheduleid=response.value.result[0][0].scheduleid;
		                    		$scope.editStartDate = response.value.result[0][0].startdate;
		        	    			$scope.editEndDate = response.value.result[0][0].enddate;
		        	    		}else{
		        	    			$scope.scheduleid="";
		        	    			$scope.editStartDate="";
		        	    			$scope.editEndDate="";
		        	    		}
		                    }
		                    else{
		                        alert(response.value.message);
		                    }
		                }).error(function(err){
		                    alert(err.value.message);
		                }); 
				   }
	           $scope.resetEditAttribute = function(){
	            	$scope.editFirstName = "";
	    			$scope.editAddress = "";
	    			$scope.editState = "";
	    			$scope.editEmail = "";
	    			$scope.editLastName = "";
	    			$scope.editCity = "";
	    			$scope.editzipCode = "";
	    			$scope.editNumber = "";
	    			$scope.editGuardNo = "";
	    			$scope.editStartDate="";
	    			$scope.editBuilding = "";
	    			$scope.editStatus = "";
	    			$scope.editEndDate="";
	    			$scope.editGuardVal="";
            		$scope.profileid="";
            		$scope.scheduleid="";
	            };
	            
	            //End edit div for admin
	            //Start edit div for guard
	            $scope.getGuardDetailsById=function(){
						   var url = "/api/guard/getguardInformationById/guardid/" + $scope.editGuardVal;
						    $http({
			                    method: 'GET',
			                    url: url
			                }).success(function(response){
			                    if(response.value.error == false){
			                    	if(response.value.result[0].length > 0){
			                    		$scope.profileid=response.value.result[0][0].profileid;
			                    		$scope.editFirstName = response.value.result[0][0].firstname;
			        	    			$scope.editAddress = response.value.result[0][0].address;
			        	    			$scope.editState = response.value.result[0][0].state;
			        	    			$scope.editEmail = response.value.result[0][0].email;
			        	    			$scope.editLastName = response.value.result[0][0].lastname;
			        	    			$scope.editCity = response.value.result[0][0].city;
			        	    			$scope.editzipCode = response.value.result[0][0].zipcode;
			        	    			$scope.editNumber = response.value.result[0][0].phonenumber;
			        	    			$scope.editGuardNo = response.value.result[0][0].guardno;
			        	    			$scope.editStatus = response.value.result[0][0].backgroundcheck;
			        	    			$('#editGuardNo').attr('disabled', true);
			        	    		}
			                    }
			                    else{
			                        alert(response.value.message);
			                    }
			                }).error(function(err){
			                    alert(err.value.message);
			                }); 
					   }
					   
					   
					   
		            
		            $scope.updateGuardDiv = function(){
		            	var url = "/api/guard/updateGuard";
		            	var editzipcodepattern=new RegExp('(^[0-9]{5}$)|(^[0-9]{5}-[0-9]{4}$)');
		            	var editphonenumberpattern=new RegExp('(^[0-9]{10}$)|(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)');
		            	var statepattern=new RegExp('AL|Alabama|AK|Alaska|AZ|Arizona|AR|Arkansas|CA|California|CO|Colorado|CT|Connecticut|DE|Delaware|FL|Florida|GA|Georgia|HI|Hawaii|ID|Idaho|IL|Illinois|IN|Indiana|IA|Iowa|KS|Kansas|KY|Kentucky|LA|Louisiana|ME|Maine|MD|Maryland|MA|Massachusetts|MI|Michigan|MN|Minnesota|MS|Mississippi|MO|Missouri|MT|Montana|NE|Nebraska|NV|Nevada|NH|New Hampshire|NJ|New Jersey|NM|New Mexico|NY|New York|NC|North Carolina|ND|North Dakota|OH|Ohio|OK|Oklahoma|OR|Oregon|PA|Pennsylvania|RI|Rhode Island|SC|South Carolina|SD|South Dakota|TN|Tennessee|TX|Texas|UT|Utah|VT|Vermont|VA|Virginia|WA|Washington|WV|West Virginia|WI|Wisconsin|WY|Wyoming');
		            	
		            	if($scope.editGuardFirstName == "" || $scope.editGuardFirstName == undefined){
		            		showErrorControl("Please enter a First Name!!", "editGuardFirstName");
		            		return false;
		            	}
		            	else if($scope.editGuardAddress == "" || $scope.editGuardAddress == undefined){
		            		showErrorControl("Please enter a Address!!", "editGuardAddress");
		            		return false;
		            	}
		            	else if($scope.editGuardState == "" || $scope.editGuardState == undefined){
		            		showErrorControl("Please enter a State!!", "editGuardState");
		            		return false;
		            	}
		            	else if(!statepattern.test($scope.editGuardState)){
		            		showErrorControl("Please enter a valid US State in the format like TX or Texas!!", "editGuardState");
		            		return false;
		            	}
		            	else if($scope.editGuardEmail == "" || $scope.editGuardEmail == undefined){
		            		showErrorControl("Please enter a Email!!", "editGuardEmail");
		            		return false;
		            	}
		            	else if($scope.editGuardLastName == "" || $scope.editGuardLastName == undefined){
		            		showErrorControl("Please enter a Last Name!!", "editGuardLastName");
		            		return false;
		            	}
		            	else if($scope.editGuardCity == "" || $scope.editGuardCity == undefined){
		            		showErrorControl("Please enter a City!!", "editGuardCity");
		            		return false;
		            	}
		            	else if($scope.editGuardZipCode == "" || $scope.editGuardZipCode == undefined){
		            		showErrorControl("Please enter a Zip Code!!", "editGuardZipCode");
		            		return false;
		            	}
		            	else if(!editzipcodepattern.test($scope.editGuardZipCode)){
		            		showErrorControl("Please enter a Zip Code in valid format like 12345 or 12345-6789!!", "editGuardZipCode");
		            		return false;
		            	}
		            	else if($scope.editGuardNumber == "" || $scope.editGuardNumber == undefined){
		            		showErrorControl("Please enter a Contact Number!!", "editNumber");
		            		return false;
		            	}
		            	else if(!editphonenumberpattern.test($scope.editGuardNumber)){
		            		showErrorControl("Please enter a Contact Number in valid format like 1234567890 or 123-456-7890!!", "editGuardNumber");
		            		return false;
		            	}
		            	else if($scope.editGuardLatitude == "" || $scope.editGuardLatitude == undefined){
		            		showErrorControl("Please enter a Latitute!!", "editGuardLatitude");
		            		return false;
		            	}
		            	else if($scope.editGuardLongitude == "" || $scope.editGuardLongitude == undefined){
		            		showErrorControl("Please enter a Longitude!!", "editGuardLongitude");
		            		return false;
		            	}
		            	else if($scope.editGuardUserName == "" || $scope.editGuardUserName == undefined){
		            		showErrorControl("Please enter a User Name!!", "editGuardUserName");
		            		return false;
		            	}
		            	else if($scope.editGuardPassword == "" || $scope.editGuardPassword == undefined){
		            		showErrorControl("Please enter a Password!!", "editGuardPassword");
		            		return false;
		            	}
		            	
		            			            	
		               $http({
		                    method: 'POST',
		                    url: url,
		                    data:
		                    {
		                    	"editGuardFirstName":$scope.editGuardFirstName,
		    	    			"editGuardAddress":$scope.editGuardAddress,
		    	    			"editGuardState":$scope.editGuardState,
		    	    			"editGuardEmail":$scope.editGuardEmail,
		    	    			"editGuardLastName":$scope.editGuardLastName,
		    	    			"editGuardCity":$scope.editGuardCity,
		    	    			"editGuardZipCode":$scope.editGuardZipCode,
		    	    			"editGuardNumber":$scope.editGuardNumber,
		    	    			"editGuardUserName":$scope.editGuardUserName,
		    	    			"editGuardLatitude":$scope.editGuardLatitude,
		    	    			"editGuardLongitude":$scope.editGuardLongitude,
		    	    			"editGuardGuardId":$scope.editGuardGuardId,
		    	    			"editGuardProfileId":$scope.editGuardProfileId,
		    	    			"editGuardUserId":$scope.editGuardUserId,
		    	    			"oldPassword":$scope.oldPassword,
		                        "editGuardPassword":$scope.editGuardPassword
		                        		                    	
		                    }
		                }).success(function(response){
		                    if(response.value.error == false){
		                        alert(response.value.result);
		                        
		    	    			
		                    }
		                    else{
		                        alert(response.value.message);
		                    }
		                }).error(function(err){
		                    alert(err);
		                });
		            };

	            //End edit div for guard
	            //For guardSearch Div
				   $scope.searchguard = function(){
				   $("#divAddGuard").hide();
					  $("#divGuardDetails").hide();
					  $("#divEditGuard").hide();
					  $("#divDeleteGuard").hide(); 
					  $("#divSearchGuard").show(); 
					   var html = 'Home <span style="padding-left: 2px"><a href="#">';
				      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Guard Module';
				      html += ' <span style="padding-left: 2px"><a href="#">';
				      html += '<img src="images/icon-breadcrumb.png" /></a></span>  Search Guard';
				      $(".BreadCrumColumn")[0].innerHTML = html;
				      $("#tddelete").css('background-color', '#fff');
				      $("#tdadd").css('background-color', '#fff');
				      $("#tdedit").css('background-color', '#fff');
				      $("#tddetails").css('background-color', '#fff');
				      $("#tdsearch").css('background-color', '#ffe4b2');
				     
				   };
				   
				   $scope.searchGuardInfo=function(){
					   var records = $scope.noofrecordsSearchDetails;
					   var firstname = $("#searchFirstName").val() == "" ? undefined : $("#searchFirstName").val();
		            	var state = $("#searchState").val() == "" ? undefined : $("#searchState").val();
		            	var lastname = $("#searchLastName").val() == "" ? undefined : $("#searchLastName").val();
		            	var city = $("#searchCity").val() == "" ? undefined : $("#searchCity").val();
		            	var zipcode = $("#searchZipCode").val() == "" ? undefined : $("#searchZipCode").val();
		            	var guardno = $("#searchGuardNo").val() == "" ? undefined : $("#searchGuardNo").val();
		            	var startdate = $("#searchStartDate").val() == "" ? undefined : $("#searchStartDate").val();
		            	var buildingid = $scope.searchBuilding;
		            	var status = $scope.searchStatus;
		            	var enddate = $("#searchEndDate").val() == "" ? undefined : $("#searchEndDate").val();
		            	
					   var paramStr="searchFirstName/"+firstname +"/searchState/"+state+"/searchLastName/"+lastname+
					   "/searchCity/"+city+"/searchZipCode/"+zipcode+"/searchGuardNo/"+guardno+"/searchStartDate/"+
					   startdate+"/searchBuildingId/"+buildingid+ 
					   "/searchStatus/"+status+"/searchEndDate/" +enddate;
					   var url = "/api/guard/searchGuard/"+paramStr + "/records/"+records+"/offset/0";
					   $http({
		                    method: 'GET',
		                    url: url
		                    /*date:
		                    	{
		                    	 "searchFirstName":$scope.searchFirstName,
		                    	 "searchState":$scope.searchState,
		                    	 "searchLastName":$scope.searchLastName,
		  					     "searchCity":$scope.searchCity,
		  					     "searchZipCode":$scope.searchZipCode,
		  					     "searchGuardNo":$scope.searchGuardNo,
		  					     "searchStartDate":$scope.searchStartDate,
		  					     "searchBuildingId":$scope.searchBuilding, 
		  					     "searchStatus":$scope.searchStatus,
		  					     "searchEndDate" : $scope.searchEndDate
		                    	}*/
		                }).success(function(response){
		                	if(response.rows!="none"){
		        	            var resp= JSON.parse(JSON.stringify(response.value));
		        	            console.log(resp);
		        	            $scope.searchGuardsList=resp; 
		        	            insertPaging(response.totalrows[0].TotalRows, 3, $scope.noofrecordsSearchDetails);				                
		        	            $("#searchDataGrid").show();
		        	           // $scope.resetSearchAttribute();
		        	         }else{
		        	        	 $scope.searchGuardsList=undefined;
		        	        	 $("#searchDataGrid").hide();
		        	         }
		                }).error(function(err){
		                    alert(err);
		                });
				   };
				   
				   $scope.getguardrecordsforsearch = function(){
					   var records = $scope.noofrecordsSearchDetails;
					   var offset = 0;
		            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
		            		offset = (parseInt(curPage) - 1) * parseInt(records);
		            	}
		            	else{
							offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
						}
		            	var firstname = $("#searchFirstName").val() == "" ? undefined : $("#searchFirstName").val();
		            	var state = $("#searchState").val() == "" ? undefined : $("#searchState").val();
		            	var lastname = $("#searchLastName").val() == "" ? undefined : $("#searchLastName").val();
		            	var city = $("#searchCity").val() == "" ? undefined : $("#searchCity").val();
		            	var zipcode = $("#searchZipCode").val() == "" ? undefined : $("#searchZipCode").val();
		            	var guardno = $("#searchGuardNo").val() == "" ? undefined : $("#searchGuardNo").val();
		            	var startdate = $("#searchStartDate").val() == "" ? undefined : $("#searchStartDate").val();
		            	var buildingid = $scope.searchBuilding;
		            	var status = $scope.searchStatus;
		            	var enddate = $("#searchEndDate").val() == "" ? undefined : $("#searchEndDate").val();
		            	
					   var paramStr="searchFirstName/"+firstname +"/searchState/"+state+"/searchLastName/"+lastname+
					   "/searchCity/"+city+"/searchZipCode/"+zipcode+"/searchGuardNo/"+guardno+"/searchStartDate/"+
					   startdate+"/searchBuildingId/"+buildingid+ 
					   "/searchStatus/"+status+"/searchEndDate/" +enddate;
					   var url = "/api/guard/searchGuard/"+paramStr + "/records/"+records+"/offset/" + offset;
					   $http({
		                    method: 'GET',
		                    url: url
		                    /*date:
		                    	{
		                    	 "searchFirstName":$scope.searchFirstName,
		                    	 "searchState":$scope.searchState,
		                    	 "searchLastName":$scope.searchLastName,
		  					     "searchCity":$scope.searchCity,
		  					     "searchZipCode":$scope.searchZipCode,
		  					     "searchGuardNo":$scope.searchGuardNo,
		  					     "searchStartDate":$scope.searchStartDate,
		  					     "searchBuildingId":$scope.searchBuilding, 
		  					     "searchStatus":$scope.searchStatus,
		  					     "searchEndDate" : $scope.searchEndDate
		                    	}*/
		                }).success(function(response){
		                	if(response.rows!="none"){
		        	            var resp= JSON.parse(JSON.stringify(response.value));
		        	            console.log(resp);
		        	            $scope.searchGuardsList=resp; 
		        	            insertPaging(response.totalrows[0].TotalRows, 3, $scope.noofrecordsSearchDetails);
		        	         }else{
		        	        	 $scope.searchGuardsList=undefined;
		        	        	 $("#searchDataGrid").hide();
		        	         }
		                }).error(function(err){
		                    alert(err);
		                });
				   };
				   
				   $scope.resetSearchAttribute = function(){
					$scope.searchFirstName = undefined;
   	    			$scope.searchState = undefined;
   	    			$scope.searchLastName = undefined;
   	    			$scope.searchCity = undefined;
   	    			$scope.searchZipCode = undefined;
   	    			$scope.searchGuardNo = undefined;
   	    			$scope.searchStartDate = undefined;
   	    			$scope.searchBuilding = undefined;
   	    			$scope.searchStatus = undefined;
   	    			$scope.searchEndDate = undefined;
   	    			$("#searchDataGrid").hide();
		            };
		            
		            $scope.showSearchDetails=function(index){
		            	var guardid=$scope.searchGuardsList[index].guardid;
			       		 var url = "/api/guard/getWeeklySchedule/guardid/"+guardid;
			                $http({
			                    method: 'GET',
			                    url: url
			                }).success(function(response){
			                    if(response.value.error == false){
			                        $scope.searchScheduleGrid = response.value.result[0];
			                        ShowPopUpWindow("divsearchguardgrid", "Guard Details", 230, 900);
			                    }
			                    else{
			                        alert(response.value.message);
			                    }
			                }).error(function(err){
			                    alert(err.value.message);
			                });
			          };     
			            
			          //End Search Div
						  			            
			          $scope.getdataforgrid = function(){
			            	var records = $scope.noofrecordsDetails;
			            	var offset = 0;
			            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
			            		offset = (parseInt(curPage) - 1) * parseInt(records);
			            	}
			            	else{
								offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
							}
				        	var url = "/api/guard/getAllGuardDetails/NoofRecords/"+records+"/pageoffset/" + offset;
				                $http({
				                    method: 'GET',
				                    url: url
				                }).success(function(response){
				                    if(response.value.error == false){
				                        $scope.deleteGuardsList = response.value.result[0];
				                        $scope.allGuardsList = response.value.result[0];
				                        insertPaging(response.value.result[1][0].totalrows, 1, $scope.noofrecordsDetails);
				                    }
				                    else{
				                        alert(response.value.message);
				                    }
				                }).error(function(err){
				                    alert(err.value.message);
				           });
			            };       
	      
	};

	
