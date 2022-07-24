// menuBtn
$(function(){
    $('.menu_btn').click(function(){
        $('.menu_ul').toggleClass('active');
    })


    $(window).resize(function(){
        if($(window).width() < 992 ){
            $('.menu_ul').removeClass('active');
        }
    })


    
    // $('.top').click(function(){
    //     $('html, body').animate({scrollTop:0},3000);
    // })


    
  /////////////////////////////////////

      $('.swiper-slide a').click(function (e) {
        e.preventDefault();
        let href = $(this);

        $('.pick img').fadeOut(500, function () {
          $(this).attr('src', href.attr('href')).fadeIn(500);
        });

      });


      $('.pop_img').hide();

      $('.swiper-slide').click(function (e) {
        e.preventDefault();

        $('.pop_img ').fadeIn(500);


      });

      $('.pop_img').click(function () {
        $('.pop_img').fadeOut(500);
      })

  
})


///////////////////////////////////////
 


//////////////////////////////////////////////////////////
//header particles

const particlesSlider = {
    
    
        "particles": {
          "number": {
            "value": 189,
            "density": {
              "enable": true,
              "value_area": 1104.8066982851817
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#070707"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.49705773886831206,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 31.67101127975246,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 128.27296486924183,
            "color": "#ffffff",
            "opacity": 0.49705773886831206,
            "width": 0
          },
          "move": {
            "enable": true,
            "speed": 4.810236182596568,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 641.3648243462092,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 401.97822008916586,
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
        "retina_detect": true
    

}


particlesJS('particles', particlesSlider);
////////////////////////////////////////////////////
//transmission text

 

///////////////////////////////////////////////////////
///slider
// var swiper = new Swiper('.swiper-5', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
// },
// });


