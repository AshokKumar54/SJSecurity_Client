
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var favicon = require('serve-favicon');
var loginController = require('./routes/authenticationAPI');
var buildingModule = require('./routes/buildingModule');
var guardModule = require('./routes/guardModule');
var billingmodule = require('./routes/billingmodule');
var clientModule = require('./routes/clientModule');
var alertModule = require('./routes/alertModule');
var report = require('./routes/report');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon(path.join(__dirname, 'public','img','favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: 'keyboard cat', cookie: { maxAge: 3000000000000000 }}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
	  res.header("Access-Control-Allow-Credentials", true);
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
	  next();
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', user.signin);
app.get('/signup', user.signup);
app.get('/sjsecurity', user.layout);

app.get('/guardmodule', user.guardmodule);
app.get('/clientmodule', user.clientmodule);
app.get('/buildingmodule', user.buildingmodule);
app.get('/reportmodule', user.reportmodule);
app.get('/alertmodule', user.alertmodule);
app.get('/billingmodule', user.billingmodule);
app.get('/logout', user.logout);

//authentication API's
app.get('/signin/username/:username/password/:password', loginController.signin);
app.post('/signup', loginController.signup);
app.get('/getallroles', loginController.getallroles);
app.get('/checksession', loginController.checksession);

//building module
app.get('/api/building/getallbuildingdetails/NoofRecords/:records/pageoffset/:pageoffset', buildingModule.getallbuildingdetails);
app.post('/api/building/createbuilding', buildingModule.addbuildingdetails);
app.post('/api/building/updatebuilding', buildingModule.updatebuildingdetails);
app.delete('/api/building/deletebuilding/buildingId/:buildingId', buildingModule.deletebuildingdetails);
app.get('/api/building/getbuildinginformation/buildingId/:buildingId', buildingModule.getbuildingdetails);
app.get('/api/building/getallbuildings', buildingModule.getallbuildings);
app.get('/api/building/getallclients', buildingModule.getallclients);

//guard module
app.get('/api/guard/getAllGuardDetails/NoofRecords/:records/pageoffset/:pageoffset', guardModule.getAllGuardDetails);
app.get('/api/guard/getWeeklySchedule/guardid/:guardid',guardModule.getWeeklySchedule);
app.get('/api/guard/getAllGuards', guardModule.getAllGuards);
app.get('/api/guard/getGuardDetails/',guardModule.getGuardDetails);
app.get('/api/guard/getGuardInformationById/guardid/:guardid',guardModule.getGuardInformationById);
app.post('/api/guard/updateGuard',guardModule.updateGuard);
app.get('/api/guard/getGuardInformation',guardModule.getGuardInformation);
app.get('/api/guard/getWeeklyScheduleById/guardid/:guardid/buildingid/:buildingid',guardModule.getWeeklyScheduleById);
app.get('/api/guard/searchGuard/searchFirstName/:searchFirstName/searchState/:searchState/searchLastName/:searchLastName'+
		   '/searchCity/:searchCity/searchzipCode/:searchZipCode/searchGuardNo/:searchGuardNo/searchStartDate/:searchStartDate/searchBuildingId/:searchBuildingId'+ 
		   '/searchStatus/:searchStatus/searchEndDate/:searchEndDate/records/:records/offset/:offset',guardModule.searchGuard);
app.post('/api/guard/createGuard', guardModule.createGuard);
app.post('/api/guard/editGuard',guardModule.editGuard)
app.delete('/api/guard/deleteGuard/guardid/:guardid', guardModule.deleteGuard);

//billing module
app.get('/api/billing/getupdatebill',billingmodule.getupdatebill);
app.get('/api/billing/getadminclientbill',billingmodule.getadminclientbill);
app.get('/api/billing/getcilentbilldetails/clientid/:clientid',billingmodule.getcilentbilldetails);
app.get('/api/billing/submitbilldetails',billingmodule.getsubmitbilldetails);
app.get('/api/billing/adminbillhome',billingmodule.getadminbillhome);
app.get('/api/billing/clientbillhome/NoofRecords/:records/pageoffset/:pageoffset',billingmodule.getclientbillhome);
app.get('/api/billing/getallbillingdetails/NoofRecords/:records/pageoffset/:pageoffset',billingmodule.getallbilldetails);
app.get('/api/billing/getbillingdetails/billingid/:billingid',billingmodule.getbilldetails);
app.post('/api/billing/submitbilldetails',billingmodule.submitbilldetails);
app.post('/api/billing/updatebilldetails/billingid/:billingid',billingmodule.updatebilldetails);

//client module
app.post('/api/client/createclient', clientModule.addclientdetails);
app.post('/api/client/updateclient', clientModule.updateclientdetails);
app.delete('/api/client/deleteclient/clientId/:clientId', clientModule.deleteclientdetails);
app.get('/api/client/getclientinformation/clientId/:clientId', clientModule.getclientdetails);
app.get('/api/client/getallclients', clientModule.getallclients);
app.get('/api/client/getallclientdetails/NoofRecords/:records/pageoffset/:pageoffset', clientModule.getallclientdetails);
app.post('/api/client/searchclient', clientModule.searchclient);
app.post('/api/client/getsearched/NoofRecords/:records/pageoffset/:pageoffset', clientModule.searchallclient);
app.get('/api/client/getRequestedClient', clientModule.getRequestedClient);
app.get('/api/clients/getallbuildings', clientModule.getallbuildings);
app.get('/api/client/getcheckpointsinformation/buildingId/:buildingId',clientModule.getcheckpointsdetails);
app.get('/api/client/getlatlongdetails/buildingId/:buildingId',clientModule.getlatlongdetails);
app.get('/api/client/getalertsforclient/NoofRecords/:records/pageoffset/:pageoffset',clientModule.getalertsforclient);
app.post('/api/client/acceptalert',clientModule.acceptalert);
app.get('/api/client/getbuildingrecords/clientId/:clientId',clientModule.getbuildingrecords);
app.get('/api/client/loadclientsonuserid',clientModule.loadclients);

//alert module apis
app.get('/api/alert/getAllAlert/NoofRecords/:records/pageoffset/:pageoffset',alertModule.displayAllALerts);
app.post('/api/alert/createAlert',alertModule.createAlert);
app.get('/api/alert/listbyBuilding/selbuildingid/:selbuildingid/NoofRecords/:records/pageoffset/:pageoffset',alertModule.listbyBuilding);
app.get('/api/alert/listbyClient/selclientid/:selclientid/NoofRecords/:records/pageoffset/:pageoffset',alertModule.listbyByClient);
app.delete('/api/alert/deleteAlert/id/:id',alertModule.deleteAlert);
app.get('/api/alert/getAlertsForClient/NoofRecords/:records/pageoffset/:pageoffset',alertModule.getAlertsForClient);
app.get('/api/alert/listSubmittedAlerts/NoofRecords/:records/pageoffset/:pageoffset',alertModule.listSubmittedAlerts);
app.put('/api/alert/alertClientAction/alertid/:alertid',alertModule.alertClientAction);
app.get('/api/alert/getBuildingidForClient',alertModule.getBuildingidForClient);
app.get('/api/alert/listAlertsByBuildFrClient/selbuildingid/:selbuildingid/NoofRecords/:records/pageoffset/:pageoffset',alertModule.listAlertsByBuildFrClient);
app.get('/api/alert/listSubmittedAlertsGuard/NoofRecords/:records/pageoffset/:pageoffset',alertModule.listSubmittedAlertsGuard);
app.post('/api/alert/submitAlert',alertModule.submitAlert);
app.get('/api/alert/searchAlert/roleid/:roleid/searchAlertName/:searchAlertName/searchguardid/:searchguardid/searchclient/:searchclient'+
			'/searchBuilding/:searchBuilding/searchseverity/:searchseverity/searchStartDate/:searchStartDate/NoofRecords/:records/pageoffset/:pageoffset',alertModule.searchAlert);
app.get('/api/alert/buildingsByClient/bclient/:bclient', alertModule.getBuildingListClient);
app.get('/api/alert/listBuildingbyGuard',alertModule.listBuildingbyGuard);
app.get('/api/alert/getGuardDetail/guardid/:guardid',alertModule.getGuardDetails);

//Report modules
app.post('/report/incident/get', report.getincident);
app.post('/report/incident/insert', report.insertincident);
app.post('/report/maintenance/get', report.getmaintenance);
app.post('/report/maintenance/insert', report.insertmaintenance);
app.post('/report/parkingviolation/get', report.getparkingviolation);
app.post('/report/parkingviolation/insert', report.insertparkingviolation);
app.post('/report/patrol/get', report.getpatrol);
app.post('/report/patrol/insert', report.insertpatrol);
app.post('/report/get', report.getreport);
app.post('/report/insert', report.insertreport);
app.post('/report/list', report.listreport);
app.post('/report/list/offset/:offset/records/:records', report.listreportpage);
app.post('/report/data', report.reportdata);
app.post('/report/search', report.searchreport);
app.post('/report/search/:offset/:records', report.searchreportpaging);
app.post('/report/service/get', report.getservice);
app.post('/report/service/insert', report.insertservice);
app.post('/report/fetch', report.fetchreportnumber);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
