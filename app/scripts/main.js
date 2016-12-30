$( document ).ready(function() {
  console.log( 'ready!' );

  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });


  var $root = $('html, body');
  $('a').click(function() {
    if( $(this).attr('data-target')=='#myCarousel') return;
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top - 110
    }, 500, function () {
      window.location.hash = href;
    });
    return false;

  });

});
