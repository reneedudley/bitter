"use strict";

var Backbone = require('Backbone');

var HomeView =Backbone.View.extend({
	el: '\
	<div class="container">\
		<div> class="row">\
			<div class="eight column" id="allposts">\
			</div>\
		</div>\
	</div>\ ',
	render:function(){
		
		return this;

	}
});

module.exports = HomeView;
