//Cycles through alpha and displays in <div> id='counter'</div> in html.


window.onload = function() {
  const alpha = "iaoeo1j2afoeieoi1coaioieoi3f";

  var x = 0,
  max = alpha.length;

var list = document.getElementsByTagName('span');

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function objectCall(){
  for (obj of list){
    cycle(obj);
  }
}

function cycle(obj){
  obj.innerHTML = alpha[x];
  if (x == (max-1)) {
    x = getRandomInt(max)
  } else if (x < max) {
    ++x;
  }
}
setInterval(objectCall,100);

}
