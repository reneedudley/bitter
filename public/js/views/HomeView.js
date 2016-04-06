"use strict";

var Backbone = require('backbone');
var PostsListView = require('./PostsListView.js');
var PostsCollection = require('../collections/PostsCollection.js');

var HomeView =Backbone.View.extend({
	el: '\
	<div class="container">\
		<div> class="row">\
			<div class="eight column" id="allposts">\
			</div>\
		</div>\
	</div>\ ',
	render:function(){
		var posts = new PostsCollection();
		var postsListView= new PostsListView({
			collection:posts
		});
		postsListView.render();
		$('#allposts').html(postsListView.el);
		return this;
	}
});

module.exports = HomeView;
