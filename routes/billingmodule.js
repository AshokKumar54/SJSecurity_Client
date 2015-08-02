var mq_client = require('../rpc/client');
var ejs = require("ejs");

function getallbilldetails(req, res)
{
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var msg_payload = { "numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "bl1" };
	console.log("In GET Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('billing_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			/*var rows = results;
			var jsonString = JSON.stringify(results);
			var jsonParse = JSON.parse(jsonString);
			
			
			console.log("routing to page");
			ejs.renderFile('./views/billingdetails.ejs',{data:results},function(err, results) {
		    // render on success
		    if (!err) {
		            res.end(results);
		    }
		    // render or error
		    else {
		            res.end('An error occurred-1');
		            console.log(err);
		    }
		    });*/
			res.status(results.code).json(results);
		}  
	});
}

function getcilentbilldetails(req, res)
{
	//var numberofrecords = req.params.records;
	//var pageoffset = req.params.pageoffset;
	//var clientid = req.session.var;
	var msg_payload = { "clientid": req.params.clientid, "apiId": "bl5" };
	//console.log("In GET Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('billing_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			/*var rows = results;
			var jsonString = JSON.stringify(results);
			var jsonParse = JSON.parse(jsonString);
			
			
			console.log("routing to page-1");
			ejs.renderFile('./views/billingdetails.ejs',{data:results},function(err, results) {
		    // render on success
		    if (!err) {
		            res.end(results);
		    }
		    // render or error
		    else {
		            res.end('An error occurred-1');
		            console.log(err);
		    }
		    });*/
			res.status(results.code).json(results);
		}  
	});
}


function getbilldetails(req, res)
{
	var billingid = req.params.billingid;
	var msg_payload = { "billingid": billingid, "apiId": "bl2" };
	console.log("In GET Request = billingid:"+ billingid);
	mq_client.make_request('billing_queue',msg_payload, function(err,results){		
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


function submitbilldetails(req, res)
{
	var clientid = req.param("clientid");
	var noofmonths = req.param("noofmonths");
	var permonthamt = req.param("permonthamt");
	var totalamt = req.param("totalamt");
	var paidamt = req.param("paidamt");
	var billid = req.param("billid");
	var msg_payload = { "clientid": clientid, 
						"noofmonths":noofmonths,
						"permonthamt":permonthamt,
						"totalamt":totalamt,
						"paidamt":paidamt,
						"billid":billid,
						"apiId": "bl3" };
	console.log("In POST Request = clientid:"+ clientid+" noofmonths"+noofmonths+
			" permonthamt"+permonthamt+" totalamt"+totalamt+" paidamt"+paidamt);
	mq_client.make_request('billing_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			//res.status(500).json(err.message);
			console.log("saved successfully-1");
			res.send({"save":"Fail"});
		}
		else 
		{
			//res.status(results.code).json(results);
			console.log("saved successfully");
			res.send({"save":"Success"});
		}  
	});
}


function updatebilldetails(req, res)
{
	var billingid = req.params.billingid;
	var paidamt = req.param("paidamt");
	var msg_payload = { "billingid": billingid, "paidamt": paidamt,"apiId": "bl4" };
	console.log("In POST Request = billid:"+ billingid+" paidamt"+paidamt);
	mq_client.make_request('billing_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			//res.status(500).json(err.message);
			res.send({"save":"Fail"});
		}
		else 
		{
			//res.status(results.code).json(results);
			res.send({"save":"Success"});
		}  
	});
}

function getsubmitbilldetails(req, res)
{

	ejs.renderFile('./views/submitbilling.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
	
}

function getadminbillhome(req, res)
{

	ejs.renderFile('./views/adminbillinghome.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
	
}

function getadminclientbill(req, res)
{

	ejs.renderFile('./views/billingclientsub.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
	
}

function getupdatebill(req, res)
{

	ejs.renderFile('./views/updatebill.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
	
}

function getclientbillhome(req, res)
{
	var clientid = 100;
	var userid = req.session.userid;
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	console.log(userid);
	//clientid = request.session.param("clientid");
	var msg_payload = { "numberofrecords": numberofrecords, "pageoffset": pageoffset,"userid": userid, "apiId": "bl6" };
	//console.log("In GET Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('billing_queue',msg_payload, function(err,results){		
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

exports.getclientbillhome=getclientbillhome;
exports.getupdatebill=getupdatebill;
exports.getadminclientbill=getadminclientbill;
exports.getcilentbilldetails=getcilentbilldetails;
exports.getallbilldetails=getallbilldetails;
exports.getbilldetails=getbilldetails;
exports.submitbilldetails=submitbilldetails;
exports.updatebilldetails=updatebilldetails;
exports.getsubmitbilldetails=getsubmitbilldetails;
exports.getadminbillhome=getadminbillhome;