
function billingmodule($scope, $http) {       
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
	    
        	var roleid = localStorage.getItem("roleid");
        	
        	if(roleid == "3"){
        		$("#buildingerrormessage").show();
        		$("#tablebuildingmodule").hide();
        	}
        	else{
        		$("#buildingerrormessage").hide();
        		$("#tablebuildingmodule").show();
        	}
        	if(roleid == "1"){
        	$("#adminDiv").show();
        	$("#clientDiv").hide();
        	$("#clientdivViewAllBills").hide();
        	$("#divViewAllBills").hide();
            $("#divViewClientBill").hide();
            $("#divUpdateBill").hide();
            $("#divSubmitBillDetails").show();
            $("#tddelete").css('background-color', '#fff');
            $("#tdadd").css('background-color', '#fff');
            $("#tdedit").css('background-color', '#fff');
            $("#tdgetdetails").css('background-color', '#ffe4b2');
            // load clients
            
            var url = "/api/building/getallclients";
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.billingclients = response.value.result[0];
	                        $scope.inputClientId = 1;
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	        });
        	}
        	if(roleid == "2"){
        		$("#adminDiv").hide();
            	$("#clientDiv").show();
            	$("#clientdivViewAllBills").show();
            	$("#divViewAllBills").hide();
                $("#divViewClientBill").hide();
                $("#divUpdateBill").hide();
                $("#divSubmitBillDetails").hide();
                $("#tddelete").css('background-color', '#fff');
                $("#tdadd1").css('background-color', '#ffe4b2');
                $("#tdedit").css('background-color', '#fff');
                $("#tdgetdetails").css('background-color', '#fff');
                // load clients
                
                var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Billing Module';
                html += ' <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Bill Details';
                $(".BreadCrumColumn")[0].innerHTML = html;
            	//var url = "/api/billing/getallbillingdetails/NoofRecords/10/pageoffset/0";
                var url = "/api/billing/clientbillhome/NoofRecords/10/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.billingGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
                        $("#divViewAllBills").show();
                        $("#divViewClientBill").hide();
                        $("#divUpdateBill").hide();
                        $("#divSubmitBillDetails").hide();
                        $("#tddelete").css('background-color', '#fff');
                        $("#tdadd1").css('background-color', '#ffe4b2');
                        $("#tdedit").css('background-color', '#fff');
                        $("#tdgetdetails").css('background-color', '#fff');
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
        	
        	}
            $scope.displaysubmitbill = function(){
            	$("#divViewAllBills").hide();
                $("#divViewClientBill").hide();
                $("#divUpdateBill").hide();
                $("#divSubmitBillDetails").show();
                $("#tddelete").css('background-color', '#fff');
                $("#tdadd").css('background-color', '#fff');
                $("#tdedit").css('background-color', '#fff');
                $("#tdgetdetails").css('background-color', '#ffe4b2');
                var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Billing Module';
                $(".BreadCrumColumn")[0].innerHTML = html;
             // load clients
                
                var url = "/api/building/getallclients";
    	                $http({
    	                    method: 'GET',
    	                    url: url
    	                }).success(function(response){
    	                    if(response.value.error == false){
    	                        $scope.billingclients = response.value.result[0];
    	                        $scope.inputClientId = 1;
    	                    }
    	                    else{
    	                        alert(response.value.message);
    	                    }
    	                }).error(function(err){
    	                    alert(err.value.message);
    	        });
            };
            $scope.displaysingleclientbill = function(){
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Billing Module';
                html += ' <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Records';
                $(".BreadCrumColumn")[0].innerHTML = html;
            	$("#divViewAllBills").hide();
                $("#divViewClientBill").show();
                $("#divUpdateBill").hide();
                $("#divSubmitBillDetails").hide();
                $("#tddelete").css('background-color', '#fff');
                $("#tdadd").css('background-color', '#fff');
                $("#tdedit").css('background-color', '#ffe4b2');
                $("#tdgetdetails").css('background-color', '#fff');
                $("#clientbillinggrid").hide();
            };
            $scope.displayupdatebill = function(){
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Billing Module';
                html += ' <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Update Bill';
                $(".BreadCrumColumn")[0].innerHTML = html;
            	$("#divViewAllBills").hide();
                $("#divViewClientBill").hide();
                $("#divUpdateBill").show();
                $("#divSubmitBillDetails").hide();
                $("#tddelete").css('background-color', '#ffe4b2');
                $("#tdadd").css('background-color', '#fff');
                $("#tdedit").css('background-color', '#fff');
                $("#tdgetdetails").css('background-color', '#fff');
            };
            
            $scope.displayallbill = function(){
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Billing Module';
                html += ' <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Bill Details';
                $(".BreadCrumColumn")[0].innerHTML = html;
            	var url = "/api/billing/getallbillingdetails/NoofRecords/10/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.billingGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
                        $("#divViewAllBills").show();
                        $("#divViewClientBill").hide();
                        $("#divUpdateBill").hide();
                        $("#divSubmitBillDetails").hide();
                        $("#tddelete").css('background-color', '#fff');
                        $("#tdadd").css('background-color', '#ffe4b2');
                        $("#tdedit").css('background-color', '#fff');
                        $("#tdgetdetails").css('background-color', '#fff');
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            $scope.submitClientId = function() {
            	
				var clientid = $scope.inputClientId1;              		
          	  	var url = "/api/billing/getcilentbilldetails/clientid/"+clientid;
          	  	$http({
          	  		method: 'GET',
          	  		url: url
          	  	}).success(function(response){
                if(response.value.error == false){
                    $scope.billingClientGrid = response.value.result[0];
                    $scope.inputClientId1 = undefined;
                    //insertPaging(response.value.result[1][0].TotalRows);
                    if(response.value.result[1][0].TotalRows == 0){
                    	$("#clientbillinggrid").hide();                        
                    }
                    else{
                        $("#clientbillinggrid").show();                    	
                    }
                }
                else{
                    alert(response.value.message);
                    $("#clientbillinggrid").hide();
                }
          	  	}).error(function(err){
                alert(err.value.message);
            });
              
            };
            
            $scope.getbillingrecordsfordisplay = function(){
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
            	var url = "/api/billing/getallbillingdetails/NoofRecords/"+ records +"/pageoffset/" + offset;
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.billingGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
                    }
                    else{
                        alert(response.value.message);
                        
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            $scope.submitBill = function() {
            	var records = $scope.noofrecordsDetails;
            	if($scope.inputBillId == "" || $scope.inputBillId == undefined){
                	  showErrorControl("Please enter bill id.", "txtbillbillid");
                  	  return false;
                }
            	else if($scope.inputNumOfMonths == "" || $scope.inputNumOfMonths == undefined){
                	  showErrorControl("Please enter number of months.", "txtbillmonths");
                  	  return false;
                }
            	else if($scope.inputAmtPerMonth == "" || $scope.inputAmtPerMonth == undefined){
                	  showErrorControl("Please enter amount per month.", "txtbillamount");
                  	  return false;
                }
            	else if($scope.inputPaidAmt == "" || $scope.inputPaidAmt == undefined){
                	  showErrorControl("Please enter paid amount.", "txtamountpaid");
                  	  return false;
                }
                var totalamt = parseInt($scope.inputNumOfMonths)*parseInt($scope.inputAmtPerMonth);
                	  
                    $http({
                          method: 'POST',
                          url: '/api/billing/submitbilldetails',
                          data: { 
                                  "clientid": $scope.inputClientId,
                                  "billid": $scope.inputBillId,
                                  "noofmonths": $scope.inputNumOfMonths, 
                                  "permonthamt": $scope.inputAmtPerMonth,
                                  "totalamt": totalamt,
                                  "paidamt": $scope.inputPaidAmt,
                                  
                                }
                          
                       }).success(function(response){
                         
                          
                          if(response.save == "Success")
                          {  
                        	  alert("Bill Saved Successfully.");
                        	  $scope.inputClientId = undefined;
                              $scope.inputBillId = undefined;
                              $scope.inputNumOfMonths = undefined;
                              $scope.inputAmtPerMonth = undefined;                  
                              $scope.inputPaidAmt = undefined;
                       	      
                          		var url = "/api/billing/getallbillingdetails/NoofRecords/"+records+"/pageoffset/0";
                              $http({
                                  method: 'GET',
                                  url: url
                              }).success(function(response){
                                  if(response.value.error == false){
                                      $scope.billingGrid = response.value.result[0];
                                      insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
                                      $("#divViewAllBills").show();
                                      $("#divViewClientBill").hide();
                                      $("#divUpdateBill").hide();
                                      $("#divSubmitBillDetails").hide();
                                      $("#tddelete").css('background-color', '#fff');
                                      $("#tdadd").css('background-color', '#ffe4b2');
                                      $("#tdedit").css('background-color', '#fff');
                                      $("#tdgetdetails").css('background-color', '#fff');
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
                        	  alert("Bill not saved properly. Please resubmit bill");
                        	  $("#divViewAllBills").hide();
                              $("#divViewClientBill").hide();
                              $("#divUpdateBill").hide();
                              $("#divSubmitBillDetails").show();
                          }
                      }).error(function(error){
                          alert("error");
                      });
                  };
                  
                  $scope.updateBill = function() {
                	  var records = $(".pageRp option:selected")[0].innerHTML;
                      if($scope.inputBillId2 == "" || $scope.inputBillId2 == undefined){
                    	  showErrorControl("Please enter billing id.", "txtbillid");
                    	  return false;
                      }
                      else if($scope.inputAmt2 == "" || $scope.inputAmt2 == undefined){
                    	  showErrorControl("Please enter amount to be updated.", "txtupdateamount");
                    	  return false;
                      }
                  	  var url = "/api/billing/updatebilldetails/billingid/"+$scope.inputBillId2;  
                      $http({
                            method: 'POST',
                            url: url,
                            data: {
                                    "paidamt": $scope.inputAmt2,
                                    
                                  }
                            
                         }).success(function(response){
                            if(response.save == "Success")
                              {
                            	alert("Bill Updated Successfully.");
                            	$scope.inputAmt2 = undefined;
                            	$scope.inputBillId2 = undefined;
                         	      $("#divViewAllBills").show();
                                  $("#divViewClientBill").hide();
                                  $("#divUpdateBill").hide();
                                  $("#divSubmitBillDetails").hide();
                                  $("#tddelete").css('background-color', '#fff');
                                  $("#tdadd").css('background-color', '#ffe4b2');
                                  $("#tdedit").css('background-color', '#fff');
                                  $("#tdgetdetails").css('background-color', '#fff');
                            		var url = "/api/billing/getallbillingdetails/NoofRecords/"+records+"/pageoffset/0";
                            		$http({
                                    method: 'GET',
                                    url: url
                                	}).success(function(response){
                                    if(response.value.error == false){
                                        $scope.billingGrid = response.value.result[0];
                                        insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
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
                            	alert("Bill not updated properly. Please resubmit bill");
                          	  	$("#divViewAllBills").hide();
                                $("#divViewClientBill").hide();
                                $("#divUpdateBill").show();
                                $("#divSubmitBillDetails").hide();
                              }
                        }).error(function(error){
                            alert("error");
                        });
                    };
                    
                    $scope.displayclientbill = function(){
                    	var html = 'Home <span style="padding-left: 2px"><a href="#">';
                        html += '<img src="images/icon-breadcrumb.png" /></a></span>  Billing Module';
                        html += ' <span style="padding-left: 2px"><a href="#">';
                        html += '<img src="images/icon-breadcrumb.png" /></a></span>  Bill Details';
                        $(".BreadCrumColumn")[0].innerHTML = html;
                    	//var url = "/api/billing/getallbillingdetails/NoofRecords/10/pageoffset/0";
                        var url = "/api/billing/clientbillhome/NoofRecords/10/pageoffset/0";
                        $http({
                            method: 'GET',
                            url: url
                        }).success(function(response){
                            if(response.value.error == false){
                                $scope.billingGrid = response.value.result[0];
                                insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
                                $("#divViewAllBills").show();
                                $("#divViewClientBill").hide();
                                $("#divUpdateBill").hide();
                                $("#divSubmitBillDetails").hide();
                                $("#tddelete").css('background-color', '#fff');
                                $("#tdadd").css('background-color', '#ffe4b2');
                                $("#tdedit").css('background-color', '#fff');
                                $("#tdgetdetails").css('background-color', '#fff');
                            }
                            else{
                                alert(response.value.message);
                            }
                        }).error(function(err){
                            alert(err.value.message);
                        });
                    };
                    
                    $scope.getclientbillingrecordsfordisplay = function(){
                    	var records = $(".pageRp option:selected")[0].innerHTML;
                    	var offset = 0;
                    	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
                    		offset = (parseInt(curPage) - 1) * parseInt(records);
                    	}
                    	else{
        					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
        				}
                    	var url = "/api/billing/clientbillhome/NoofRecords/"+ records +"/pageoffset/" + offset;
                        $http({
                            method: 'GET',
                            url: url
                        }).success(function(response){
                            if(response.value.error == false){
                                $scope.billingGrid = response.value.result[0];
                                insertPaging(response.value.result[1][0].TotalRows, 1, $scope.noofrecordsDetails);
                            }
                            else{
                                alert(response.value.message);
                                
                            }
                        }).error(function(err){
                            alert(err.value.message);
                        });
                    };
            
}