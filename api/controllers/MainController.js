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
			sails.sockets.blast("increment", {count: reply});
			return res.json({});
		});


  },

	count: function (req, res) {
    //return res.ok("hurra");
		return res.json({
      count: 2,
    });
  },

};
