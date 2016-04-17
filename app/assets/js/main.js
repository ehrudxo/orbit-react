jQuery(document).ready(function($) {


  /*======= Skillset *=======*/


  $('.level-bar-inner').css('width', '0');

  $(window).on('load', function() {
    var reference = document.querySelector('.profile');

    var thePopper = new Popper(
      reference, {
        content: 'I commit, therefore I exist'
      }, {
        placement: 'left-start',
        boundariesElement: reference
      }
    );
    $('.level-bar-inner').each(function() {

      var itemWidth = $(this).data('level');

      $(this).animate({
        width: itemWidth
      }, 800);

    });

  });



});
