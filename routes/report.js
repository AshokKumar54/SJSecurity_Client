var request = require("request");
var url = require('url');


var mq_client = require('../rpc/client');


exports.getincident = function(req, res) {
};
exports.insertincident = function(req, res) {

	mq_client.make_request('report_queue',{
		reqtype : "/report/incident/insert",
		httpreqtype:"POST",
		data : {
			idincident : 0,
			incidenttype : req.param("incidenttype"),
			officerbadge : req.param("officerbadge"),
			policereportnumber : req.param("policereportnumber"),
			officername : req.param("officername"),
			actiontaken : req.param("actiontaken"),
			buildingnumber : req.param("buildingnumber"),
			reportnumber : req.param("reportnumber"),
			summary : req.param("summary")
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false
			}));
		} else {
			res.send({
				status : "failure",
				error : true
			})
		}
	});

};
exports.getmaintenance = function(req, res) {
};
exports.insertmaintenance = function(req, res) {
	mq_client.make_request('report_queue',{
		reqtype : "/report/maintenance/insert",
		httpreqtype:"POST",
		data : {
			idmaintenance : 0,
			type : req.param("maintenancetype"),
			status : req.param("maintenancestatus"),
			description : req.param("maintenancedescription"),
			reportnumber : req.param("hdnreportnumber")
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});
};
exports.getparkingviolation = function(req, res) {
};
exports.insertparkingviolation = function(req, res) {

	mq_client.make_request('report_queue',{
		reqtype : "/report/parkingviolation/insert",
		httpreqtype:"POST",
		data : {
			idparkingviolation : 0,
			licenseplate : req.param("parkviolicenseplate"),
			location : req.param("parkviolocation"),
			stall : req.param("parkviostall"),
			model : req.param("parkviomodel"),
			color : req.param("parkviocolor"),
			year : req.param("parkvioyear"),
			reportnumber : req.param("hdnreportnumber"),
			description : req.param("parkviosummary")
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});

};
exports.getpatrol = function(req, res) {
};
exports.insertpatrol = function(req, res) {
	mq_client.make_request('report_queue',{
		reqtype : "/report/patrol/insert",
		httpreqtype:"POST",
		data : {
			idpatrol : 0,
			summary : req.param("patrolsummary"),
			reportnumber : req.param("hdnreportnumber")
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});
};
exports.getreport = function(req, res) {
};
exports.insertreport = function(req, res) {
	mq_client.make_request('report_queue',{
		reqtype : "/report/insert",
		httpreqtype:"POST",
		data : {
			guardid : req.param("guardid"),
			buildingid : req.param("buildingid")
		// "reportnumber:req.param("reportnumber")
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});
};
exports.getservice = function(req, res) {
};
exports.insertservice = function(req, res) {

	mq_client.make_request('report_queue',{
		reqtype : "/report/service/insert",
		httpreqtype:"POST",
		data : {
			idservice : req.param("idservice"),
			type : req.param("servicetype"),
			accountnumber : req.param("serviceaccount"),
			officerinitial: req.param("serviceofficerinitial"),
			deliverytime : req.param("servicedeliverytime"),
			reportnumber : req.param("hdnreportnumber"),
			summary : req.param("servicesummary")
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);
			//
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});

};

exports.fetchreportnumber = function(req, res) {

	//console.log("guardid: " + req.param("guardid"));
	//console.log("buildingid: " + req.param("buildingid"));
	mq_client.make_request('report_queue',{
		reqtype : "/report/fetch",
		httpreqtype:"GET",
		data : {
			guardid:req.session.userid,
			buildingid:0,
			reportnumber:0
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send({
				status : "success",
				code : 200,
				data : l.data[0],
				message : l.message,
				error : l.error

			});
		} else {
			res.send({
				status : "failure",
				code : 200
			})
		}
	});

};

exports.listreportpage = function(req, res) {
	var reqt ="";
	if (req.param("type") == "CR") {
		reqt = "client"
	}
	if (req.param("type") == "BR") {
		reqt = "building"
	}
	
	var offset = req.params.offset;
	var records = req.params.records;
	 console.log(offset,records);
	
	mq_client.make_request('report_queue',{
		reqtype : "/report/list/page/"+reqt,
		httpreqtype:"GET",
		data : {
			clientid:req.param("clientid"),
			buildingid:req.param("buildingid"),
			reportnumber:req.param("reportnumber"),
			type:req.param("type"),
			offset:offset,
			records:records
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false,
				data:l.data,
				totalrows:l.totalrows
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});
};



exports.listreport = function(req, res) {
	
	var reqt ="";
	if (req.param("type") == "CR") {
		reqt = "client"
	}
	if (req.param("type") == "BR") {
		reqt = "building"
	}
	
	console.log("/report/list/"+reqt);

	console.log("/report/list/"+reqt +"/");
	console.log("Calling here" + req.param("type"));
	
	console.log( req.param("clientid") +","+ req.param("buildingid") +","+ req.param("reportnumber")+","+req.param("type"))
	
	mq_client.make_request('report_queue',{
		reqtype : "/report/list/"+reqt,
		httpreqtype:"GET",
		data : {
			clientid:req.param("clientid"),
			buildingid:req.param("buildingid"),
			reportnumber:req.param("reportnumber"),
			type:req.param("type")
		}
	}, function(error, body) {
		var l = body;
		console.log(l);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false,
				data:l.data
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});
};



exports.getbuildingreport = function(req, res) {
	mq_client.make_request('report_queue',{
		reqtype : "/report/list/building",
		httpreqtype:"GET",
		data : {
			clientid:req.param("clientid"),
			buildingid:req.param("buildingid"),
			reportnumber:req.param("reportnumber")
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false,
				data:l.data
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});
};

exports.searchreport = function(req, res) {
	mq_client.make_request('report_queue',{
		reqtype : "/report/search",
		httpreqtype:"GET",
		data : {
			searchparam:req.param("searchparam"),
			operation:req.param("operation")
		}
	}, function(error, body) {
		var l = body;
		////console.log(l.status);
		if (l.status == "success") {
			////console.log("The data is"+l.data);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false,
				data:l.data
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});
};


exports.searchreportpaging = function(req, res) {
	console.log(req.params.offset+","+ req.params.records + "," + req.param("searchparam")+","+req.param("operation"))
	mq_client.make_requestwithPaging('report_queue',{
		reqtype : "/report/search/page",
		httpreqtype:"GET",
		data : {
			offset:req.params.offset,
			records:req.params.records,
			searchparam:req.param("searchparam"),
			operation:req.param("operation")
		}
	}, function(error, body) {
		var l = body;
		console.log(body);
		if (l.status == "success") {
			console.log("The data is " +body.totalrows);

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({
				status : "success",
				error : false,
				data:l.data,
				totalrows:body.totalrows
			}));
		} else {
			res.send({
				status : "failure",
				error : l.error
			})
		}
	});
};
exports.reportdata = function(req, res) {

	//console.log("reportnumber: " + req.param("reportnumber"));
	mq_client.make_request('report_queue',{
		reqtype : "/report/data",
		httpreqtype:"GET",
		data : {
			reportnumber:req.param("reportnumber"),
		}
	}, function(error, body) {
		var l = body;
		//console.log(l.status);
		if (l.status == "success") {
			//console.log(l.data);

			res.setHeader('Content-Type', 'application/json');
			console.log("Building data");
			console.log(l.data[6]);
			res.send({
				status : "success",
				code : 200,
				incidentData : l.data[0],
				parkingviolationData : l.data[1],
				maintenanceData : l.data[2],
				serviceData : l.data[3],
				patrolData : l.data[4],
				guarddata:l.data[5],
				buildingdata:l.data[6],
				reportdata:l.data[7],
				message : l.message,
				error : l.error
			});
		} else {
			res.send({
				status : "failure",
				code : 200
			})
		}
	});

};


