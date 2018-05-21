$(function() {
  var gallery = $('.musiciansGallery')
  var galleryWidth = parseInt($('.musiciansGallery').css('width'))
  var galleryMargin = parseInt($('.musiciansGallery').css('margin-left'))
  var galleryScroll = parseInt($('.musiciansGallery').scrollLeft())
  var blockWidth = parseInt($('.musicianBlock').css('width'))
  var blockMargin = parseInt($('.musicianBlock').css('margin-right'))
  var scrollWidth = blockWidth + blockMargin
  var maxScroll = galleryWidth - blockWidth;

  $('.chevron#left').css('opacity', 0)

  function checkScroll() {
    galleryScroll = parseInt($('.musiciansGallery').scrollLeft())
    console.log(galleryScroll);
    console.log(maxScroll);

    if (galleryScroll == 0) {
      $('.chevron#left').css('opacity', 0)
      $('.chevron#right').css('opacity', 1)
    } else if (galleryScroll == maxScroll) {
      $('.chevron#left').css('opacity', 1)
      $('.chevron#right').css('opacity', 0)
    } else {
      $('.chevron#left').css('opacity', 1)
      $('.chevron#right').css('opacity', 1)
    }
  }

  $('.chevron#right').click(function() {
    $('.musiciansGallery').scrollLeft(galleryScroll + scrollWidth)
    checkScroll()
  })

  $('.chevron#left').click(function() {
    $('.musiciansGallery').scrollLeft(galleryScroll - scrollWidth)
    checkScroll()
  })
})
