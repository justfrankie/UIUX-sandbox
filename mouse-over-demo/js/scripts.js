var x = 0;
var y = 0;
var z = 0;

$(document).ready(function(){
  $("div.over").mouseover(function(){
    $(".over span").text(x += 1);
  });
  $("div.enter").mouseenter(function(){
    $(".enter span").text(y += 1);
  });
  $("div.move").mousemove(function(){
    $(".move span").text(z += 1);
  });
});
