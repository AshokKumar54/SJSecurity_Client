/**
 * Alert Client module
 */
var mq_client = require('../rpc/client');

function displayAllAlerts(req, res){
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var msg_payload = { "numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "a1" };	
	console.log("In POST display Alert Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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

function createAlert(req,res)
{
	var alertname= req.body.newalertname;
	var buildingid = req.body.newbuildingid;
	var clientid = req.body.newclientid;
	var severity = req.body.newseverity;
	var description = req.body.newdescription;
	console.log(" alertname "+alertname+" buildingid "+buildingid+" clientid "+clientid+" severity "+severity+" description "+description);
	var msg_payload={"alertname":alertname,"buildingid":buildingid,"clientid":clientid,"severity":severity,"description":description,"apiId":"a2"};
	mq_client.make_request('alert_queue', msg_payload, function(err, results) {
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
function listbyBuilding(req,res)
{
	var selbuildingid = req.params.selbuildingid;
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var msg_payload = {"selbuildingid":selbuildingid,"numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "a3" };	
	console.log("In POST display Alert Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function listbyByClient(req,res)
{
	var selclientid = req.params.selclientid;
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var msg_payload = {"selclientid":selclientid,"numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "a4" };	
	console.log("In POST display Alert Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function listAlertById(req,res)
{
	var selectId=req.body.selectId;
	var msg_payload = {"selectId":selectId,"apiId": "a5" };	
	console.log("In POST display Alert Request =id"+selectId);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function deleteAlert(req, res){
	var msg_payload = { "id": req.params.id, "apiId": "a6" };		
	console.log("In POST Request = id:"+ req.params.id);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function getAlertsForClient(req,res)
{
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var userid=req.session.userid;
	var msg_payload = { "userid":userid,"numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "a7" };	
	console.log("In POST display Alert Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function listSubmittedAlerts(req,res)
{
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var userid=req.session.userid;
	var msg_payload = { "userid":userid,"numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "a8" };	
	console.log("In POST display Alert Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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

function getAlertsForGuard(req,res)
{
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var userid=req.session.userid;
	var subclientid = req.params.subclientid;
	var subbuildingid = req.params.subbuildingid;
	var msg_payload = { "subclientid":subclientid,"subbuildingid":subbuildingid,"numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "a10" };	
	console.log("In POST display Alert Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function alertClientAction(req,res)
{
	var alertid = req.params.alertid;
	var msg_payload = {"alertid":alertid,"apiId":"a9"};
	console.log("In POST display Alert Request = alertid"+alertid);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function getBuildingidForClient(req,res)
{	var userid ;
	if(req.params.bclient==null||req.params.bclient=='undefined')
		userid = req.session.userid;
	else
		userid = req.params.bclient;
	var msg_payload = {"userid":userid,"apiId":"a11"};
	console.log("In POST display Alert Request = userid "+userid);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function getBuildingListClient(req,res)
{	var bclient = req.params.bclient;
	var msg_payload = {"bclient":bclient,"apiId":"a16"};
	console.log("In POST display Alert Request = userid "+bclient);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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

function listSubmittedAlertsGuard(req,res)
{
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var userid=req.session.userid;
	console.log(" userid is::::::::::::::::::::::::::::::::: "+userid);
	var msg_payload = {"userid":userid, "numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "a12" };	
	console.log("In POST display Alert Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function submitAlert(req,res)
{
	var alertid= req.body.subalertid;
	var userid = req.session.userid;
	console.log(" alertid "+alertid);
	var msg_payload={"alertid":alertid,"userid":userid,"apiId":"a13"};
	mq_client.make_request('alert_queue', msg_payload, function(err, results) {
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
function searchAlert(req,res)
{	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var roleid= req.params.roleid;
	var userid = req.session.userid;
	var msg_payload = {"roleid":roleid,"userid":userid,"searchAlertName": req.params.searchAlertName, "searchguardid": req.params.searchguardid,"searchclient":req.params.searchclient,"searchBuilding":req.params.searchBuilding,
	           "searchseverity":req.params.searchseverity,"searchStartDate":req.params.searchStartDate,"numberofrecords":numberofrecords,"pageoffset":pageoffset,"apiId": "a14" };	
	console.log("In POST Request = searchAlert");
	mq_client.make_request('alert_queue',msg_payload, function(err,results){		
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
function listBuildingbyGuard(req,res)
{
	var userid=req.session.userid;
	var msg_payload={"userid":userid,"apiId":"a17"};
	mq_client.make_request('alert_queue', msg_payload, function(err, results) {
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

function listAlertsByBuildFrClient(req,res)
{
	var selbuildingid= req.params.selbuildingid;
	var userid = req.session.userid;
	//console.log(" alertid "+alertid);
	var msg_payload={"buildingid":selbuildingid,"userid":userid,"numberofrecords": req.params.records, "pageoffset": req.params.pageoffset,"apiId":"a15"};
	mq_client.make_request('alert_queue', msg_payload, function(err, results) {
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

function getGuardDetails(req,res)
{
	var guardid = req.params.guardid;
	var msg_payload={"guardid":guardid,"apiId":"a18"};
	mq_client.make_request('alert_queue', msg_payload, function(err, results) {
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


exports.getGuardDetails=getGuardDetails;
exports.listBuildingbyGuard=listBuildingbyGuard;
exports.getBuildingListClient=getBuildingListClient;
exports.listAlertsByBuildFrClient=listAlertsByBuildFrClient;
exports.searchAlert=searchAlert;
exports.submitAlert=submitAlert;
exports.listSubmittedAlertsGuard=listSubmittedAlertsGuard;
exports.getBuildingidForClient=getBuildingidForClient;
exports.displayAllALerts=displayAllAlerts;
exports.createAlert=createAlert;
exports.listbyBuilding=listbyBuilding;
exports.listbyByClient=listbyByClient;
exports.deleteAlert=deleteAlert;
exports.getAlertsForGuard=getAlertsForGuard;
exports.getAlertsForClient=getAlertsForClient;
exports.listSubmittedAlerts=listSubmittedAlerts;
exports.alertClientAction=alertClientAction;