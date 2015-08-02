var mq_client = require('../rpc/client');
var crypto = require('crypto'),
algorithm = 'sha512',
salt = "team3sjsecurity";

function checksession(req, res){
	res.status(200).json(req.session.userid);
}

function signin(req, res){
	var username = replaceUnwantedCharacters(req.params.username);
	var h = crypto.createHash(algorithm);
    h.update(replaceUnwantedCharacters(req.params.password));
    h.update(salt);
	var password = h.digest('base64');
	var msg_payload = { "username": username, "password": password, "apiId": 'l1' };	
	console.log("In POST Request = UserName:"+ username+" "+password);
	mq_client.make_request('login_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			if(results.value.error == true){
				res.status(500).json(results);	
			}
			else{
				req.session.userid = results.value.result[0].UserId;
				res.status(results.code).json(results);				
			}
		}  
	});
}

function signup(req, res){
	var emailid = replaceUnwantedCharacters(req.body.emailaddress);
	var h = crypto.createHash(algorithm);
    h.update(replaceUnwantedCharacters(req.body.password));
    h.update(salt);
	var password = h.digest('base64');
	var firstname = replaceUnwantedCharacters(req.body.firstname);
	var lastname = replaceUnwantedCharacters(req.body.lastname);
	var roleid = parseInt(req.body.roleid);
	var ssnnumber = replaceUnwantedCharacters(req.body.ssnnumber);
	var msg_payload = { "emailid": emailid, "password": password, "firstname": firstname, "lastname": lastname, "roleid": roleid, "salt": salt, "ssnnumber": ssnnumber, "apiId": 'l2' };	
	mq_client.make_request('login_queue',msg_payload, function(err,results){		
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

function getallroles(req, res){
	var msg_payload = { "apiId": 'l3' };	
	mq_client.make_request('login_queue',msg_payload, function(err,results){		
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

function replaceUnwantedCharacters(n) {
	var parameter = n;
	var desired = parameter.replace(/<script>/gi, "");
	desired = desired.replace(/\/script>/gi, "");
	return desired
}

exports.signin=signin;
exports.signup=signup;
exports.getallroles=getallroles;
exports.checksession=checksession;