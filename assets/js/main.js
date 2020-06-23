$(function () {

  "use strict";

  // getElementById wrapper
  function $id(id) {
    return document.getElementById(id);
  }

  // asyncrhonously fetch the html template partial from the file directory,
  // then set its contents to the html of the parent element
  function loadHTML(url, id) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = () => {
      $id(id).innerHTML = req.responseText;
      $('html, body').animate({
        scrollTop: 0,
      }, 150);
    };
  }

  // use #! to hash
  var router = new Navigo(null, true, '#!');
  router.on({
    'vseobecne-podmienky': () => { loadHTML('./templates/terms.html', 'view'); },
    'zasady-pouzivania-cookies': () => { loadHTML('./templates/cookies.html', 'view'); },
    'gdpr': () => { loadHTML('./templates/gdpr.html', 'view'); },
    'ochrana-osobnych-udajov': () => { loadHTML('./templates/oou.html', 'view'); }
  });

  // default route
  router.on(() => { 
    $id('view').innerHTML = $id('view').innerHTML; 
  });
  // 404 route
  router.notFound((query) => { 
    $id('view').innerHTML = loadHTML('./templates/404.html', 'view');; 
  });
  router.resolve();


  //===== Sticky
  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      //$(".navbar .navbar-brand img").attr("src", "assets/images/logo.svg");
    } else {
      $(".navbar-area").addClass("sticky");
      //$(".navbar .navbar-brand img").attr("src", "assets/images/logo-2.svg");
    }
  });

  //===== Section Menu Active
  var scrollLink = $('.page-scroll');
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      if($(this.hash).offset()) {
        var sectionOffset = $(this.hash).offset().top - 73;
        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      }
    });
  });

  //===== close navbar-collapse when a  clicked
  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
  });
  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });
  $(".navbar-nav a").on('click', function () {
    $(".navbar-toggler").removeClass('active');
  });

  //===== Back to top
  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });

  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
  });


  if (document.getElementById("particles-1")) particlesJS("particles-1", {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": false,
          "value_area": 333
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "image": {
          "src": "/assets/images/ghost-png.png",
          "width": 50,
          "height": 50
        }
      },
      "opacity": {
        "value": 0.26831443294901214,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 35,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  });

  if (document.getElementById("particles-2")) particlesJS("particles-2", {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": !0,
          "value_area": 4000
        }
      },
      "color": {
        "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "image": {
          "src": "/assets/images/ghost-png.png",
          "width": 50,
          "height": 50
        }
      },
      "opacity": {
        "value": 0.15,
        "random": !0,
        "anim": {
          "enable": !0,
          "speed": 0.2,
          "opacity_min": 0.15,
          "sync": !1
        }
      },
      "size": {
        "value": 50,
        "random": !0,
        "anim": {
          "enable": !0,
          "speed": 2,
          "size_min": 5,
          "sync": !1
        }
      },
      "line_linked": {
        "enable": !1,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": !0,
        "speed": 1,
        "direction": "top",
        "random": !0,
        "straight": !1,
        "out_mode": "out",
        "bounce": !1,
        "attract": {
          "enable": !1,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": !1,
          "mode": "bubble"
        },
        "onclick": {
          "enable": !1,
          "mode": "repulse"
        },
        "resize": !0
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1,
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  });






});
