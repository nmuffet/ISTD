//Cycles through alpha and displays in <div> id='counter'</div> in html.


window.onload = function() {
  const alpha = "ibaeo1j2afoeie1coayieoi3f";

  var x = 0, y=0, z=3, a=0, b=0, c=0, d=0, h=0, i=0, j=0
    max = alpha.length,
    one = document.getElementById("1");
    two = document.getElementById("2");
    three = document.getElementById("3");
    four = document.getElementById("4");
    five = document.getElementById("5");
    six = document.getElementById("6");
    seven = document.getElementById("7");
    eight = document.getElementById("8");
    nine = document.getElementById("9");
    ten = document.getElementById("10");



  function incrementCounter1() {
    one.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter1, 100);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter1, 100);
    }
  }
  function incrementCounter2() {
    two.innerHTML = alpha[y];
    if (y == (max-1)) {
      y = 0;
      setTimeout(incrementCounter2, 100);
    } else if (y < max) {
      ++y;
      setTimeout(incrementCounter2, 100);
    }
  }
  function incrementCounter3() {
    three.innerHTML = alpha[z];
    if (z == (max-1)) {
      z = 0;
      setTimeout(incrementCounter3, 100);
    } else if (z < max) {
      ++z;
      setTimeout(incrementCounter3, 100);
    }
  }
  function incrementCounter4() {
    four.innerHTML = alpha[a];
    if (a == (max-1)) {
      a = 0;
      setTimeout(incrementCounter4, 100);
    } else if (a < max) {
      ++a;
      setTimeout(incrementCounter4, 100);
    }
  }
  function incrementCounter5() {
    five.innerHTML = alpha[b];
    if (b == (max-1)) {
      b = 0;
      setTimeout(incrementCounter5, 100);
    } else if (b < max) {
      ++b;
      setTimeout(incrementCounter5, 100);
    }
  }
  function incrementCounter6() {
    six.innerHTML = alpha[c];
    if (c == (max-1)) {
      c = 0;
      setTimeout(incrementCounter6, 100);
    } else if (c < max) {
      ++c;
      setTimeout(incrementCounter6, 100);
    }
  }
  function incrementCounter7() {
    seven.innerHTML = alpha[d];
    if (d == (max-1)) {
      d = 0;
      setTimeout(incrementCounter7, 100);
    } else if (d < max) {
      ++d;
      setTimeout(incrementCounter7, 100);
    }
  }
  function incrementCounter8() {
    eight.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter8, 100);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter8, 100);
    }
  }
  function incrementCounter9() {
    nine.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter9, 100);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter9, 100);
    }
  }
  function incrementCounter10() {
    ten.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter10, 100);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter10, 100);
    }
  }

  
  incrementCounter1();
  incrementCounter2();
  incrementCounter3();
  incrementCounter4();
  incrementCounter5();
  incrementCounter6();
  incrementCounter7();
  incrementCounter8();
  incrementCounter9();
  incrementCounter10();




}
/*
window.onload = function() {
  const alpha = "aksjhdfiuwyer5bnkjzdhb982734bnsm,vhb901bkjavbkushadfkjashfsd";

    var x = 0,
      max = alpha.length,
      list = document.getElementById("1");
      console.log(list);
    function incrementCounter() {
      list.innerHTML = alpha[x];
      if (x == (max-1)) {
        x = 0;
        setTimeout(incrementCounter(), 100);
      } else if (x < max) {
        setTimeout(incrementCounter(), 100);
        ++x;
      }
    }
for (let i=0; i<list.length; ++i)
    incrementCounter();
    
  }
 
*/

  //Begin again
 /*
  window.onload = function(){
  const alphabet = "sdlakfj89234hkjnbv082u43r5hkajhb02b3kjha0g9u;q2345balkjb892";
  let max = alphabet.length;
  list = document.getElementsByTagName('div');
  console.log(list);

  let alphatrack = 0;  

  function counter(d){  
    for(let i=0; i < max; ++i){
      d.innerHTML = alphabet[alphatrack];
      if (i = (max-1)){
        i = 0;
        //setTimeout(counter(d), 100);
      }
      else{
        ++alphatrack;
     // setTimeout(counter(d), 100);
    }
    }
  }

  for(d of list){
    counter(d);
  }


 }
 */