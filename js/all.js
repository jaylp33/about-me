$(document).ready(function () {


    defaultAnimation();
    $(".expCard").hide();

    var windowWidth = $(window).width();
    var liWidth = document.getElementById('topNav').offsetWidth;

    // page section
    $('#fullpage').fullpage({
        anchors: ['index', 'about', 'exp', 'skill', 'task', 'contact'],
        scrollOverflow: true,
        menu: '#header',
    });

    if (windowWidth < '900') {
        $('.topNav').css({
            'right': '-'+liWidth+'px'
        });

    }else {
    bubbleTreeCard();

    }

    // HambergerMenu
    $(document).on('click', '.hamburgerMenu', function () {
        $('.menu-item').toggleClass('open');
        if ($(this).hasClass('.hamburgerActive')) {
            $('.topNav').removeClass('.hamburgerActive');
            $('.hamburgerMenu').removeClass('.hamburgerActive');
            

            $('.mobileMenu').css({
                'right': 0
            });
        } else {
            $('.topNav').addClass('.hamburgerActive');
            $('.hamburgerMenu').addClass('.hamburgerActive');

            $('.mobileMenu').css({
                'right': liWidth + 'px'
            })
        }
    });


    $(window).on('hashchange', function(e){
        // Your Code goes here
        var scroll = window.location.href;

        // get section when find #
        urlPage = scroll.split('#');

        Page = urlPage[1];

        if (Page == 'index') {
            showName_index();
        }
        else if (Page == 'about') {

        }
        else if (Page == 'exp') {
            treeBubble();
        } else if (Page == 'skill') {
            skillText();
        }

       });

    $(window).scroll(function(){
        //trigger the scroll
        $(window).scroll(); //ensure if you're in current position when page is refreshed
    })


    $(document).on('click', '#cardBtn', function(){
        $.fn.fullpage.moveSectionDown();
      });

    // index name animation
    function showName_index() {
        var myName = anime.timeline({
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: false
          });

          myName.add({
              targets: '.cardTitle polygon, path, rect',
                  strokeDashoffset: [anime.setDashoffset, 0],
                  easing: 'easeInOutSine',
                  duration: 1500,
                  delay: function(el, i) { return i * 10 },
                  direction: 'alternate',
                  loop: false,
          })
          .add({
            targets: '.myName',
            width: '100%',
            height: '100%',
            easing: 'easeInOutExpo',
            duration: 1500
          }, '-=1500')
          .add({
              targets: '.divLine',
              translateY: '-90%',
              easing: 'easeInOutSine',
              begin: function() {

                  $('.divLine').css({
                      'border-top': '#d6b161 4px solid'
                  });
              }
          }, '-=200')
          .add({
              targets: '.cardDes',
              translateY: '-50%',
              begin: function(){
                  $('.cardDes').css({
                      'opacity': 1

                  });
              }
          },'+=200')
          .add({
              target: '.cardBtn',
              begin: function(){
                  $('.cardBtn').css({
                      'opacity': 1
                  });
              },
              translateY: '-50%',
          }, '+=500')
    }

   // default animation
   function defaultAnimation() {

    var Page = window.location.href;
    var urlPage = Page.split('about-me/');
    var urlPage2 = urlPage[1].split('.');
    var onPage = urlPage2[0];

        if (onPage == '' || onPage == 'index') {
            showName_index();
        }
    }

    // Exp tree animation hover on PC view
    function bubbleTreeCard() {
        $(".expCard").hide();

        let bubble = [".hotPink", ".yellow", ".orange", ".green", ".purple"];
        let card = [".coffee", ".car", ".carWash", ".domino", ".fullstack"];
        for(let i=0; i<6; i++) {
            $(bubble[i]).hover(function() {
            $(card[i]).fadeIn(100);
            },
            function() {
            $(card[i]).fadeOut(10);
            });
        };
    }

     // Exp tree bubble animation
     function treeBubble() {

        let treeBubble = anime.timeline ({
            direction: 'alternate',
            loop: false,
            autoplay: true,

        })

        treeBubble.add({
            targets: '.line',
            height: '62vh',
            duration: 2000,
            easing: 'easeInOutQuad',
            loop:false
        })
        .add({
            //orange 2014 Circle
            targets: '.l',
            opacity: 1,
            duration: 1000,
            begin:function() {
                $('.l').css({
                    'display': 'flex',
                });
            },
        }, '-=2000')
        .add({
            //bg7
            targets: '.bg-7',
            opacity: 1,
            duration: 2000,

        }, '-=2000')
        .add({
            //pink
            targets: '.hotPink',
            opacity: 1,
            duration: 2000,

        }, '-=1500')
        .add({
            //blue
            targets: '.bg-5',
            opacity: 1,
            duration: 2000,

        }, '-=2000')
        .add({
            //brown
            targets: '.bg-1',
            opacity: 1,
            duration: 2000,

        }, '-=2000')
        .add({
            //small yellow
            targets: '.bg-4',
            opacity: 1,
            duration: 2000
        }, '-=1800')
        .add({
            //dark purple
            targets: '.bg-2',
            opacity: 1,
            duration: 2000
        }, '-=1800')
        .add({
            //green
            targets: '.green',
            opacity: 1,
            duration: 2000
        }, '-=1950')
        .add({
            //yellow
            targets: '.yellow',
            opacity: 1,
            duration: 2000
        }, '-=1900')
        .add({
            //light green
            targets: '.bg-8',
            opacity: 1,
            duration: 2000
        }, '-=1800')
        .add({
            // light red(pink)
            targets: '.bg-9',
            opacity: 1,
            duration: 2000
        }, '-=1900')
        .add({
            //super light green
            targets: '.bg-6',
            opacity: 1,
            duration: 2000
        }, '-=2000')
        .add({
            //top pink
            targets: '.bg-3',
            opacity: 1,
            duration: 2000
        }, '-=2100')
        .add({
            //purple m
            targets: '.bg-10',
            opacity: 1,
            duration: 2000
        }, '-=2000')
        .add({
            //big green
            targets: '.bg-11',
            opacity: 1,
            duration: 2000
        }, '-=2100')
        .add({
            //2019
            targets: '.purple',
            opacity: 1,
            duration: 2000
        }, '-=1800')

    }

    function skillText() {

        console.log('skill');
        let skillText = anime({
            targets: '.letter',
            opacity: 1,
            translateY: 10,
            delay: anime.stagger(50, {start: 1000}),
            translateX: [-550, 0],
            translateY: [200, -200]
          });
    }
});