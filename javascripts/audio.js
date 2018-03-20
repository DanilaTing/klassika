$(function() {
  var muted = false

  $('.soundOnOff').click(function() {
    if (muted == false) {
      muted = true
      $('.audio').prop('muted', true)
      $('.soundOnOff').css('background-image', "url('images/icons/sound-on.svg'")
    } else {
      muted = false
      $('.audio').prop('muted', false)
      $('.soundOnOff').css('background-image', "url('images/icons/sound-off.svg'")
    }
  })
})
