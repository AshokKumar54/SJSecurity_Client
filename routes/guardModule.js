var mq_client = require('../rpc/client');
var crypto = require('crypto'),
algorithm = 'sha512',
salt = "team3sjsecurity";
//Start of details
function getAllGuardDetails(req, res){
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var msg_payload = { "numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "g1" };	
	console.log("In POST Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function getWeeklySchedule(req, res){
	var msg_payload = { "guardid": req.params.guardid,"apiId": "g2" };	
	console.log("In POST Request = guardid:"+ req.params.guardid);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function getGuardDetails(req, res){
	var msg_payload = { "guarduserid": req.session.userid,"apiId": "g12" };	
	console.log("In POST Request = guarduserid:"+ req.session.userid);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}
//End of details
//Start of Edit for guard
function getGuardInformation(req, res){
	var msg_payload = { "guarduserid": req.session.userid,"apiId": "g10" };	
	console.log("In POST Request = guarduserid:"+ req.session.userid);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}
function updateGuard(req, res){
	console.log(req);
	var editGuardPassword="";
	var editGuardFirstName=req.body.editGuardFirstName;
	var editGuardAddress=req.body.editGuardAddress;
	var editGuardState=req.body.editGuardState;
	var editGuardEmail=req.body.editGuardEmail;
	var editGuardLastName=req.body.editGuardLastName;
	var editGuardCity=req.body.editGuardCity;
	var editGuardZipCode=req.body.editGuardZipCode;
	var editGuardNumber=req.body.editGuardNumber;
	var editGuardProfileId=req.body.editGuardProfileId;
	var editGuardUserId=req.body.editGuardUserId;
	var editGuardUserName=req.body.editGuardUserName;
	var editGuardGuardId=req.body.editGuardGuardId;
	var editGuardLatitude=req.body.editGuardLatitude;
	var editGuardLongitude=req.body.editGuardLongitude;
	console.log(req.body.oldPassword==req.body.editGuardPassword)
	if(req.body.oldPassword==req.body.editGuardPassword){
		editGuardPassword=req.body.oldPassword;
	}else{
		var h = crypto.createHash(algorithm);
		h.update(replaceUnwantedCharacters(req.body.editGuardPassword));
	    h.update(salt); 
	    editGuardPassword = h.digest('base64');
		
	}
	
	
    var msg_payload = { "guarduserid": req.session.userid,"editGuardFirstName": editGuardFirstName, "editGuardAddress": editGuardAddress, "editGuardState": editGuardState, "editGuardEmail": editGuardEmail, "editGuardLastName": editGuardLastName, "editGuardCity": editGuardCity, "editGuardZipCode": editGuardZipCode, "editGuardNumber": editGuardNumber, "editGuardProfileId": editGuardProfileId, "editGuardUserId": editGuardUserId, "editGuardUserName": editGuardUserName,"editGuardPassword": editGuardPassword,"editGuardGuardId":editGuardGuardId,"editGuardLatitude":editGuardLatitude,"editGuardLongitude":editGuardLongitude, "apiId": "g11" };	
	console.log("In POST Request = editGuardUserId:"+ req.session.userid);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}
//End of edit for guard
//Start of edit for admin
function getAllGuards(req, res){
	console.log('inside getALlGuards')
	var msg_payload = { "apiId": "g3" };	
	console.log("In POST Request");
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function getGuardInformationById(req, res){
	console.log('inside getGuardInformationById')
	var msg_payload = { "guardid": req.params.guardid,"apiId": "g5" };	
	console.log("In POST Request = guardid:"+ req.params.guardid);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function getWeeklyScheduleById(req, res){
	console.log('inside getWeeklyScheduleById')
	var msg_payload = { "guardid": req.params.guardid,"buildingid":req.params.buildingid,"apiId": "g6" };	
	console.log("In POST Request = guardid:"+ req.params.guardid);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function editGuard(req, res){
	console.log(req);
	
	var editFirstName=req.body.editFirstName;
	var editAddress=req.body.editAddress;
	var editState=req.body.editState;
	var editEmail=req.body.editEmail;
	var editLastName=req.body.editLastName;
	var editCity=req.body.editCity;
	var editzipCode=req.body.editzipCode;
	var editNumber=req.body.editNumber;
	var editGuardNo=req.body.editGuardNo;
	var editStartDate=req.body.editStartDate;
	var editBuildingId=req.body.editBuildingId;
	var editBuildingName=req.body.editBuildingName;
	var editStatus=req.body.editStatus;
	var editEndDate=req.body.editEndDate;
	var editGuardId=req.body.editGuardId;
	var editProfile=req.body.editProfile;
	var editSchedule=req.body.editSchedule;
	var editWorkingHours=req.body.editWorkingHours;
    
		
	var msg_payload = { "editFirstName": editFirstName, "editAddress": editAddress, "editState": editState, "editEmail": editEmail, "editLastName": editLastName, "editCity": editCity, "editzipCode": editzipCode, "editNumber": editNumber, "editGuardNo": editGuardNo, "editStartDate": editStartDate, "editBuildingId": editBuildingId,"editBuildingName": editBuildingName, "editStatus": editStatus, "editEndDate": editEndDate,"editWorkingHours":editWorkingHours,"editGuardId":editGuardId,"editProfile":editProfile,"editSchedule":editSchedule, "apiId": "g7" };	
	console.log("In POST Request = editGuardNo:"+ editGuardNo);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}
//End of edit for admin


//Start of create Guard
function createGuard(req, res){
	console.log(req);
	var newFirstName=req.body.newFirstName;
	var newAddress=req.body.newAddress;
	var newState=req.body.newState;
	var newEmail=req.body.newEmail;
	var newLastName=req.body.newLastName;
	var newCity=req.body.newCity;
	var newzipCode=req.body.newzipCode;
	var newNumber=req.body.newNumber;
	var newGuardNo=req.body.newGuardNo;
	var newStartDate=req.body.newStartDate;
	var newBuildingId=req.body.newBuildingId;
	console.log(newBuildingId);
	var newBuildingName=req.body.newBuildingName;
	var newStatus=req.body.newStatus;
	var newEndDate=req.body.newEndDate;
	var newWorkingHours=req.body.newWorkingHours;
	
	var h = crypto.createHash(algorithm);
	h.update(replaceUnwantedCharacters('temp123'));
    h.update(salt);
    var newPassword = h.digest('base64');
	
	var msg_payload = { "newFirstName": newFirstName, "newAddress": newAddress, "newState": newState, "newEmail": newEmail, "newLastName": newLastName, "newCity": newCity, "newzipCode": newzipCode, "newNumber": newNumber, "newGuardNo": newGuardNo, "newStartDate": newStartDate, "newBuildingId": newBuildingId,"newBuildingName": newBuildingName, "newStatus": newStatus, "newEndDate": newEndDate,"newWorkingHours":newWorkingHours,"newPassword" :newPassword, "apiId": "g4" };	
	console.log("In POST Request = newGuardNo:"+ newGuardNo);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}
//End of create

//Start of delete
function deleteGuard(req, res){
	var msg_payload = { "guardid": req.params.guardid, "apiId": "g8" };		
	console.log("In POST Request = guardid:"+ req.params.guardid);
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}
//End of delete

//Start of search
function searchGuard(req, res){
	var msg_payload = { "searchFirstName": req.params.searchFirstName, "searchState": req.params.searchState,"searchLastName":req.params.searchLastName,"searchCity":req.params.searchCity,
	           "searchZipCode":req.params.searchZipCode,"searchGuardNo":req.params.searchGuardNo,"searchStartDate":req.params.searchStartDate,"searchBuildingId":req.params.searchBuildingId,
	           "searchStatus":req.params.searchStatus,"searchEndDate":req.params.searchEndDate, "records": req.params.records, "offset": req.params.offset,"apiId": "g9" };	
	console.log("In POST Request = searchGuard");
	mq_client.make_request('guard_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			throw err;
		}
		else 
		{
			if(results.code == 200){
				res.json(results);
			}
			else {    
				res.send({"rows":"none"});
			}
		}  
	});
}
//End of Search

function replaceUnwantedCharacters(n) {
	var parameter = n;
	var desired = parameter.replace(/<script>/gi, "");
	desired = desired.replace(/\/script>/gi, "");
	return desired
}

exports.getAllGuardDetails=getAllGuardDetails;
exports.getAllGuards=getAllGuards;
exports.createGuard=createGuard;
exports.editGuard=editGuard;
exports.updateGuard=updateGuard;
exports.deleteGuard=deleteGuard;
exports.searchGuard=searchGuard;
exports.getWeeklySchedule=getWeeklySchedule;
exports.getGuardInformationById=getGuardInformationById;
exports.getGuardInformation=getGuardInformation;
exports.getGuardDetails=getGuardDetails;
exports.getWeeklyScheduleById=getWeeklyScheduleById;