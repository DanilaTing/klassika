$(function() {
  // $('.map').mouseenter(function() {
  //   $(this).css({
  //     height: '620px',
  //     width: '348px'
  //   })
  // })
  //
  // $('.map').mouseleave(function() {
  //   $(this).css({
  //     height: '600px',
  //     width: '328px'
  //   })
  // })

  $('.map').click(function() {
    $(this).css({
      width: '100vw',
      height: '100vh',
      margin: '0',
      opacity: '1',
      'z-index': '999',
      top: '0',
      cursor: 'auto',
      filter: 'blur(0px)'
    })

    $('.close').css('opacity', '1')
  })

  $('.close').click(function() {
    $('.map').css({
      height: '600px',
      width: '328px',
      opacity: '.3',
      top: '121px',
      cursor: "url('images/cursor1.png'), auto",
      filter: 'blur(8px)'
    })

    $('.close').css('opacity', '0')
  })
})
