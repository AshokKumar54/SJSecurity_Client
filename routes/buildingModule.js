var mq_client = require('../rpc/client');

function getallbuildingdetails(req, res){
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var msg_payload = { "numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "b1" };	
	console.log("In POST Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('building_queue',msg_payload, function(err,results){		
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

function addbuildingdetails(req, res){
	var buildingname = req.body.buildingname;
	var address = req.body.address;
	var contactnumber = req.body.contactnumber;
	var contactname = req.body.contactname;
	var clientid = req.body.clientid;
	var clientname = req.body.clientname;
	var releasedate = req.body.releasedate;
	var lat1 = req.body.latitude1;
	var lat2 = req.body.latitude2;
	var lat3 = req.body.latitude3;
	var lat4 = req.body.latitude4;
	var lat5 = req.body.latitude5;
	var lon1 = req.body.longitude1;
	var lon2 = req.body.longitude2;
	var lon3 = req.body.longitude3;
	var lon4 = req.body.longitude4;
	var lon5 = req.body.longitude5;
	var msg_payload = { "buildingname": buildingname, "address": address, "contactnumber": contactnumber, "contactname": contactname, "clientid": clientid, "clientname": clientname, "releasedate": releasedate, "lat1": lat1, "lat2": lat2, "lat3": lat3, "lat4": lat4, "lat5": lat5, "lon1": lon1, "lon2": lon2, "lon3": lon3, "lon4": lon4, "lon5": lon5, "apiId": "b5" };	
	console.log("In POST Request = buildingname:"+ buildingname+" "+address);
	mq_client.make_request('building_queue',msg_payload, function(err,results){		
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

function updatebuildingdetails(req, res){
	var buildingid = parseInt(req.body.buildingid);
	var buildingname = req.body.buildingname;
	var address = req.body.address;
	var contactnumber = req.body.contactnumber;
	var contactname = req.body.contactname;
	var clientid = req.body.clientid;
	var clientname = req.body.clientname;
	var releasedate = req.body.releasedate;
	var lat1 = req.body.latitude1;
	var lat2 = req.body.latitude2;
	var lat3 = req.body.latitude3;
	var lat4 = req.body.latitude4;
	var lat5 = req.body.latitude5;
	var lon1 = req.body.longitude1;
	var lon2 = req.body.longitude2;
	var lon3 = req.body.longitude3;
	var lon4 = req.body.longitude4;
	var lon5 = req.body.longitude5;
	var msg_payload = { "buildingid": buildingid, "buildingname": buildingname, "address": address, "contactnumber": contactnumber, "contactname": contactname, "clientid": clientid, "clientname": clientname, "releasedate": releasedate, "lat1": lat1, "lat2": lat2, "lat3": lat3, "lat4": lat4, "lat5": lat5, "lon1": lon1, "lon2": lon2, "lon3": lon3, "lon4": lon4, "lon5": lon5, "apiId": "b6" };	
	console.log("In POST Request = buildingid:"+ buildingid+" "+buildingname);
	mq_client.make_request('building_queue',msg_payload, function(err,results){		
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

function deletebuildingdetails(req, res){
	var buildingid = req.params.buildingId;
	var msg_payload = { "buildingid": buildingid, "apiId": "b7" };		
	console.log("In POST Request = buildingid:"+ buildingid);
	mq_client.make_request('building_queue',msg_payload, function(err,results){		
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

function getbuildingdetails(req, res){
	var buildingid = req.params.buildingId;
	var msg_payload = { "buildingid": buildingid, "apiId": "b4" };	
	console.log("In POST Request = buildingid:"+ buildingid);
	mq_client.make_request('building_queue',msg_payload, function(err,results){		
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

function getallbuildings(req, res){
	var msg_payload = { "apiId": "b2" };	
	mq_client.make_request('building_queue',msg_payload, function(err,results){		
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

function getallclients(req, res){
	var msg_payload = { "apiId": "b3" };	
	mq_client.make_request('building_queue',msg_payload, function(err,results){		
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

exports.getallbuildingdetails=getallbuildingdetails;
exports.addbuildingdetails=addbuildingdetails;
exports.updatebuildingdetails=updatebuildingdetails;
exports.deletebuildingdetails=deletebuildingdetails;
exports.getbuildingdetails=getbuildingdetails;
exports.getallclients=getallclients;
exports.getallbuildings=getallbuildings;