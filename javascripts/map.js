$(function() {
  $('.map').click(function() {
    $(this).css({
      width: '100vw',
      height: '100vh',
      margin: '0',
      opacity: '1',
      'z-index': '999',
      top: '0',
      cursor: 'auto'
    })

    $('.close').css('opacity', '1')
  })

  $('.close').click(function() {
    $('.map').css({
      height: '600px',
      width: '328px',
      opacity: '.3',
      top: '121px',
      cursor: "url('images/cursor1.png'), auto"
    })

    $('.close').css('opacity', '0')
  })
})
