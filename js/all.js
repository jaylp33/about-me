$(document).ready(function () {

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






    // CardTitle Name anime
    var name = anime({
        targets: '.cardTitle polygon, path, rect',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 50 },
        direction: 'alternate',
        loop: false,
          
        
      });

});