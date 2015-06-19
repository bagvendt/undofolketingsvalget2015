window.onload = function(){
  io.socket.on("increment", function (msg) {
    console.log(msg);
    document.getElementById("count").innerHTML = msg.count;
  });
};


var increment = function() {
  io.socket.post('/increment', function(data, jwres) {
    //console.log(data);
    //document.getElementById("count").innerHTML = data.count;
  });
};

var update = function() {
  io.socket.get('/count', function(data, jwres) {
    console.log(data);
    document.getElementById("count").innerHTML = data.count;
  });
};
