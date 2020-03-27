$(document).ready(function () {

    var windowWidth = $(window).width();
    var liWidth = document.getElementById('topNav').offsetWidth;

    // page section
    $('#fullpage').fullpage({
        anchors: ['index', 'about', 'exp', 'skill', 'task', 'contact'],
        scrollOverflow: true,
        menu: '#header',
    });

    if (windowWidth < '1024') {
        $('.topNav').css({
            'right': '-' + liWidth + 'px'

        });
    }

    $(".expCard").hide();


    // cursor expCard to show
    let bubble = [".babyBlue", ".hotPink", ".yellow", ".orange", ".green", ".purple"];
    let card = [".translate", ".pianoClub", ".shopping", ".government", ".campaign", ".technical"];
    for (let i = 0; i < 6; i++) {
        $(bubble[i]).hover(function () {
                $(card[i]).fadeIn(60);
            },
            function () {
                $(card[i]).fadeOut(60);
            });
    };


    // HambergerMenu
    $(document).on('click', '.hamburgerMenu', function () {


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

    $(window).on('hashchange', function (e) {
        // Your Code goes here
        var scroll = window.location.href;

        // get section when find #
        var urlPage = scroll.split('#');
        console.log(urlPage[1]);
    });

    $(window).scroll(function () {


        //trigger the scroll
        $(window).scroll(); //ensure if you're in current position when page is refreshed
    })






    var here = document.getElementById('timeLine').pageYOffset;




    

    // CardTitle Name anime
    // var name = anime({
    //     targets: '.cardTitle polygon, path, rect',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     easing: 'easeInOutSine',
    //     duration: 1500,
    //     delay: function (el, i) {
    //         return i * 50
    //     },
    //     direction: 'alternate',
    //     loop: false,
    //     complete: function() {
    //         $('.myName').css({
    //             'width': '100%',
    //             'height' : '100%'
                
    //         });
    //     }

    // });

    var nameLine = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 750,
        autoplay: true
      });


    //   nameLine.add({
    //     targets: '.cardTitle polygon, path, rect',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     easing: 'easeInOutSine',
    //     duration: 1500,
    //     delay: function (el, i) {
    //         return i * 50
    //     },
    //     direction: 'alternate',
    //     loop: false,
    //   })
    //   .add({
    //       targets: 'p',
    //       translateX: '150',
    //       width:'100%',
    //       height:'100%'

    //   });

    nameLine.add({
        targets: '.divLine',
        translateX: 250
    })

});