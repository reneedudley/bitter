"use strict";
var Backbone = require('Backbone');
var _= require('Underscore');

var PostsListView = Backbone.View.extend({
	el: '<ul></ul>',
	template: _.template('\
		<% posts.each(function(post) {%>\
			<li><a href="#"><%=post.get("content") %></a></li>\
			<% }) %>\
	'),
	render: function(){
		this.template({posts:this.collection});
		return this;
	}

});