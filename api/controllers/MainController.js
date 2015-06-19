/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


	index: function (req, res) {
		var redis = GLOBAL._REDISCLIENT;
		redis.get("count", function(err, reply) {
			return res.view('index', {
		    count: reply,
		  });
		});
  },

	increment: function (req, res) {
		var redis = GLOBAL._REDISCLIENT;
		redis.incr("count", function(err, reply) {
			redis.get("count", function(err, reply) {
				return res.json({count: reply});
			});
		});


  },

	count: function (req, res) {
    //return res.ok("hurra");
		var redis = GLOBAL._REDISCLIENT;
		redis.get("count", function(err, reply) {
			return res.json({count: reply});
		});
  },

};
