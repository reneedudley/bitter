'use strict';

var browserify= require('browserify');
var HomeView = require('./views/HomeView.js'); 

var Backbone = require('backbone');

$(function(){
	$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
 

	var homeView= new HomeView();

	$('#content').html(homeView.render().el);
});