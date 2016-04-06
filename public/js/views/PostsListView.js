"use strict";

var _ = require('Underscore');
var Backbone = require('backbone');

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

module.exports = PostsListView;
