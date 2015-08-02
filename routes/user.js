
/*
 * GET users listing.
 */

exports.signin = function(req, res){
	res.render('signin', { title: 'SJ Security : Signin' });
};

exports.signup = function(req, res){
	if(req.session.userid){
		res.render('signup', { title: 'SJ Security : Signup' });
	}
	else{
		res.render('signin', { title: 'SJ Security : Signin' });
	}
};

exports.layout = function(req, res){
	if(req.session.userid){
		res.render('layout', { title: 'SJ Security : Home Page' });
	}
	else{
		res.render('signin', { title: 'SJ Security : Signin' });
	}
};

exports.guardmodule = function(req, res){
	if(req.session.userid){
		res.render('guardmodule', { title: 'SJ Security : Guard Module' });
	}
	else{
		res.render('signin', { title: 'SJ Security : Signin' });
	}
};

exports.clientmodule = function(req, res){
	if(req.session.userid){
		res.render('clientmodule', { title: 'SJ Security : Client Module' });
	}
	else{
		res.render('signin', { title: 'SJ Security : Signin' });
	}
};

exports.buildingmodule = function(req, res){
	if(req.session.userid){
		res.render('buildingmodule', { title: 'SJ Security : Building Module' });
	}
	else{
		res.render('signin', { title: 'SJ Security : Signin' });
	}
};

exports.reportmodule = function(req, res){
	if(req.session.userid){
		res.render('reportmodule', { title: 'SJ Security : Report Module' });
	}
	else{
		res.render('signin', { title: 'SJ Security : Signin' });
	}
};

exports.alertmodule = function(req, res){
	if(req.session.userid){
		res.render('alertmodule', { title: 'SJ Security : Alert Module' });
	}
	else{
		res.render('signin', { title: 'SJ Security : Signin' });
	}
};

exports.billingmodule = function(req, res){
	if(req.session.userid){
		res.render('billingmodule', { title: 'SJ Security : Billing Module' });
	}
	else{
		res.render('signin', { title: 'SJ Security : Signin' });
	}
};

exports.logout = function(req, res){
	req.session.destroy();
	res.render('signin', { title: 'SJ Security : Signin' });
};