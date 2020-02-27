$(document).ready(function () {

    $('#fullpage').fullpage({
        anchors:['index', 'about', 'exp', 'skill', 'task', 'contact'],
        scrollOverflow: true,
        menu: '#header',
    });

    anime({
        targets: '.cardTitle polygon, path, rect',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 50 },
        direction: 'alternate',
        loop: false,
          
        
      });

});