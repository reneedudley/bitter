'use strict';

var Backbone = require('backbone');

var PostModel = Backbone.Model.extend({
	urlRoot: '/posts',
	idAttribute: 'id'

});

module.exports =PostModel;