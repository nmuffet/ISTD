$(document).ready(function () {

  // set classes
  var color = new Array('orange', 'darkblue', 'teal', 'green');
  var colorB = new Array('orange-b', 'darkblue-b', 'teal-b', 'green-b');

  var shape = new Array
    ('square', 'tri', 'circle');

  var notempty = new Array
    ('square', 'tri', 'circle');

  var tri = new Array('tri-up-right', 'tri-up-left', 'tri-down-left');


  // calculate length once, as this will never change
  var colorlength = color.length;
  var shapelength = shape.length;
  var trilength = tri.length;

  var notlength = notempty.length;

  //Randomizes shape AND color
  function randomAll(target) {



    // select all random classes
    var links = $(target);

    //clear previously added shape classes

    $.each(links, function (key, value) {
      for (var i = 0; i < colorlength; ++i) {
        links.removeClass(color[i]);
      }
    });
    $.each(links, function (key, value) {
      for (var i = 0; i < colorlength; ++i) {
        links.removeClass(shape[i]);
      }
    });


    // loop through all a-tags and apply color randomly

    $.each(links, function (key, value) {
      // get random value/class-name from array and add it using the addClass function
      $(value).addClass(shape[Math.floor(Math.random() * shapelength)]);
      $(value).addClass(color[Math.floor(Math.random() * colorlength)]);

    });



    // select all tri classes
    var tris = $('.tri' && target);

    $.each(links, function (key, value) {
      for (var i = 0; i < trilength; ++i) {
        links.removeClass(tri[i]);
      }
    });

    $.each(tris, function (key, value) {
      // get random value/class-name from array and add it using the addClass function
      // $(value).removeClass('tri');
      $(value).addClass(tri[Math.floor(Math.random() * trilength)]);
    });
  }


  //randomizes shape and color, but won't hide object
  function randomNotEmpty(target) {



    // select all random classes
    var links = $(target);

    //clear previously added shape classes

    $.each(links, function (key, value) {
      for (var i = 0; i < colorlength; ++i) {
        links.removeClass(color[i]);
      }
    });
    $.each(links, function (key, value) {
      for (var i = 0; i < colorlength; ++i) {
        links.removeClass(shape[i]);
      }
    });


    // loop through all a-tags and apply color randomly

    $.each(links, function (key, value) {
      // get random value/class-name from array and add it using the addClass function
      $(value).addClass(notempty[Math.floor(Math.random() * notlength)]);
      $(value).addClass(color[Math.floor(Math.random() * colorlength)]);

    });



    // select all tri classes
    var tris = $('.tri' && target);

    $.each(links, function (key, value) {
      for (var i = 0; i < trilength; ++i) {
        links.removeClass(tri[i]);
      }
    });

    $.each(tris, function (key, value) {
      // get random value/class-name from array and add it using the addClass function
      // $(value).removeClass('tri');
      $(value).addClass(tri[Math.floor(Math.random() * trilength)]);
    });
  }



  //Randomizes shape ONLY
  function randomShape(target) {



    // select all random classes
    var links = $(target);

    //clear previously added shape classes

    $.each(links, function (key, value) {
      for (var i = 0; i < colorlength; ++i) {
        links.removeClass(shape[i]);
      }
    });


    // loop through all a-tags and apply color randomly

    $.each(links, function (key, value) {
      // get random value/class-name from array and add it using the addClass function
      $(value).addClass(shape[Math.floor(Math.random() * shapelength)]);

    });



    // select all tri classes
    var tris = $('.tri' && target);
    boolflag = false
    $.each(links, function (key, value) {

      for (var i = 0; i < trilength; ++i) {
        links.removeClass(tri[i]);
      }
    });

    $.each(tris, function (key, value) {
      // get random value/class-name from array and add it using the addClass function
      // $(value).removeClass('tri');
      $(value).addClass(tri[Math.floor(Math.random() * trilength)]);
    });
  }



//Randomizes array
function randomArray(target,a) {



  // select all random classes
  var links = $(target);

  //clear previously added shape classes

  $.each(links, function (key, value) {
    for (var i = 0; i < a.length; ++i) {
      links.removeClass(a[i]);
    }
  });


  // loop through all a-tags and apply color randomly

  $.each(links, function (key, value) {
    // get random value/class-name from array and add it using the addClass function
    $(value).addClass(a[Math.floor(Math.random() * a.length)]);

  });

}







      function cycleLetter(target) {
        const alpha = "oa2oeao1j2af%oe5o*6eo^i1couaio0&eoi3$f";

        var x = 0,
          max = alpha.length;

        var list = document.getElementsByClassName(target);

        function getRandomInt(n) {
          return Math.floor(Math.random() * n);
        }

        function objectCall() {
          for (obj of list) {
            cycle(obj);
          }
        }

        function cycle(obj) {
          obj.innerHTML = alpha[x];
          if (x == (max - 1)) {
            x = getRandomInt(max)
          } else if (x < max) {
            ++x;
          }
        }
        setInterval(objectCall, 200);

      }

      function cycleLetterI(target) {
        const alpha2 = "iiei1ji1'ii*i^i1'i^ii1";

        var x = 0,
          max = alpha2.length;

        var list = document.getElementsByClassName(target);

        function getRandomInt(n) {
          return Math.floor(Math.random() * n);
        }

        function objectCall() {
          for (obj of list) {
            cycle(obj);
          }
        }

        function cycle(obj) {
          obj.innerHTML = alpha2[x];
          if (x == (max - 1)) {
            x = getRandomInt(max)
          } else if (x < max) {
            ++x;
          }
        }
        setInterval(objectCall, 200);

      }

      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");

          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }

      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        })
      };

      randomAll('.random');
      randomNotEmpty('.notempty');
      randomShape('.randomshape');
      cycleLetter('letterCycle');
      cycleLetterI('letterCycle-i');
      cycleShape('.cycle-shape')

      function cycleShape(target) {
        setInterval(() => { randomNotEmpty(target) }, 800);
      }

      function cycleArray(target, a) {
        setInterval(() => { randomArray(target,a) }, 800);
      }
    
      cycleArray('.cycle-color',colorB);


      var fiveShape = new Array('square','circle');
      var patterns = new Array('diag-right','diag-right-black','vert-green','diag-left-orange','vert-orange','h-orange','polka-darkblue', 'polka-teal')
      function graphic5Cycle(target){

      cycleArray(target, fiveShape);
      cycleArray(target, patterns);
      }

      graphic5Cycle('.graphic5b');


        //ROLLOVER FUNCTION

 
/*
 let targets = document.querySelectorAll('.rollover');

 targets.forEach(target => {

  target.addEventListener('mouseover', () => {

      for (var i = 0; i < colorlength; ++i) {
        target.removeClass(color[i]);
      }

      for (var i = 0; i < shapelength; ++i) {
        target.removeClass(shape[i]);
      }

      target.addClass('.orange');
      target.addClass('.circle');
    })
 });

*/

function rollover(target) {



  // select all random classes
  var links = $(target);



  $.each(links, function (key, value) {
    this.addEventListener('mouseover', () => {
/*
      for (var i = 0; i < colorlength; ++i) {
        $(this).removeClass(color[i]);
      }

      for (var i = 0; i < shapelength; ++i) {
        $(this).removeClass(shape[i]);
      }
      */


      //$(this).addClass('diag-right');
    this.style.border = ".05125rem solid";
     this.style.backgroundColor = "transparent";

     if ($(this).hasClass("tri")){
      $(this).removeClass('tri');
      $(this).addClass('empty');
      this.style.border='none';
      this.style.backgroundColor='transparent';
    }
    }
  );


  }
   ) }
  rollover('.rollover');

  })