$(function() {
  var scrolled = $('.menubar').offset().top
  var newMargin = 0
  var lastScrollTop = 0

  $(this).scroll(function() {
    scrolled = $('.menubar').offset().top
    console.log(scrolled);

    // $('.skew').css('transform', 'rotateX(10deg) rotateY(5deg) rotateZ(-5deg)')

    if ( scrolled > lastScrollTop ) {
      newMargin += 1
    } else {
      newMargin -= 1
    }

    if (scrolled > 1) {
      $('.logo').css('animation-name', 'scrollup')
    } else {
      $('.logo').css('animation-name', '')
    }

    if ( scrolled > 200 ) {
      $('.firstScreenOval').css('fill', 'rgba(184, 238, 215, 1)')
    } else {
      $('.firstScreenOval').css('fill', 'rgba(253, 235, 14, 1)')
    }

    // newMargin += 1

    $('.violin').css('margin-top', newMargin)

    lastScrollTop = scrolled
  })
})
