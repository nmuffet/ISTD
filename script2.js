//Cycles through alpha and displays in <div> id='counter'</div> in html.


window.onload = function() {
  const alpha = "jaeif";

  var x = 0,
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
      setTimeout(incrementCounter1, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter1, 50);
    }
  }
  function incrementCounter2() {
    two.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter2, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter2, 50);
    }
  }
  function incrementCounter3() {
    three.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter3, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter3, 50);
    }
  }
  function incrementCounter4() {
    four.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter4, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter4, 50);
    }
  }
  function incrementCounter5() {
    five.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter5, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter5, 50);
    }
  }
  function incrementCounter6() {
    six.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter6, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter6, 50);
    }
  }
  function incrementCounter7() {
    seven.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter7, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter7, 50);
    }
  }
  function incrementCounter8() {
    eight.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter8, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter8, 50);
    }
  }
  function incrementCounter9() {
    nine.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter9, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter9, 50);
    }
  }
  function incrementCounter10() {
    ten.innerHTML = alpha[x];
    if (x == (max-1)) {
      x = 0;
      setTimeout(incrementCounter10, 50);
    } else if (x < max) {
      ++x;
      setTimeout(incrementCounter10, 50);
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
        setTimeout(incrementCounter(), 50);
      } else if (x < max) {
        setTimeout(incrementCounter(), 50);
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
        //setTimeout(counter(d), 50);
      }
      else{
        ++alphatrack;
     // setTimeout(counter(d), 50);
    }
    }
  }

  for(d of list){
    counter(d);
  }


 }
 */