$(document).ready(function () {

    defaultAnimation();

    var windowWidth = $( window ).width();
    var liWidth = document.getElementById('topNav').offsetWidth;

    // page section
    $('#fullpage').fullpage({
        anchors:['index', 'about', 'exp', 'skill', 'task', 'contact'],
        scrollOverflow: true,
        menu: '#header',
    });

    if (windowWidth < '1024' ) {
        $('.topNav').css({
            'right': '-'+liWidth+'px'
            
        });
    }

    $(".expCard").hide();
  
        let bubble = [".babyBlue", ".hotPink", ".yellow", ".orange", ".green", ".purple"];
        let card = [".translate", ".pianoClub", ".shopping", ".government", ".campaign", ".technical"];
        for(let i=0; i<6; i++) {
            $(bubble[i]).hover(function() {
            $(card[i]).fadeIn(60);
            }, 
            function() {
            $(card[i]).fadeOut(60);
            });
        };


    // HambergerMenu
    $(document).on('click', '.hamburgerMenu', function() {

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
                'right' : liWidth + 'px'
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
        
       });

    $(window).scroll(function(){
            
            
        //trigger the scroll
        $(window).scroll();//ensure if you're in current position when page is refreshed
    })


    $(document).on('click', '#cardBtn', function(){
        $.fn.fullpage.moveSectionDown();
      });
    


    var here = document.getElementById('timeLine').pageYOffset;


    

    








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
    
    if (onPage == 'index') {
        showName_index();
    }
}
      
      

});