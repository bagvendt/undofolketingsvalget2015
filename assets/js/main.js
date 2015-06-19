window.onload = function(){
  io.socket.on("increment", function (msg) {
    document.getElementById("count").innerHTML = msg.count;
  });
};


var increment = function() {
  io.socket.post('/increment', function(data, jwres) {
    console.log(data);
  });
};

var update = function() {
  io.socket.get('/count', function(data, jwres) {
    console.log(data);
  });
};