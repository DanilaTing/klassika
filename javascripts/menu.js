$(function() {
  var aboutWidth = $('#about').css('width')
  var charityWidth = $('#charity').css('width')
  var programmeWidth = $('#programme').css('width')
  var musiciansWidth = $('.rubric#musicians').css('width')

  var rubricsOffset = $('.rubrics').offset().left

  var aboutOffset = $('#about').offset().left - rubricsOffset
  var charityOffset = $('#charity').offset().left - rubricsOffset
  var programmeOffset = $('#programme').offset().left - rubricsOffset
  var musiciansOffset = $('.rubric#musicians').offset().left - rubricsOffset

  function setAboutWidth() {
    $('.selector').css({'width': aboutWidth + charityWidth})
    $('.selector').css({'width': aboutWidth, 'margin-left': aboutOffset})
  }

  function setCharityWidth() {
    $('.selector').css({'width': aboutWidth + charityWidth})
    $('.selector').css({'width': charityWidth, 'margin-left': charityOffset})
  }

  function setProgrammeWidth() {
    $('.selector').css({'width': charityWidth + programmeWidth})
    $('.selector').css({'width': programmeWidth, 'margin-left': programmeOffset})
  }

  function setMusiciansWidth() {
    $('.selector').css({'width': programmeWidth + musiciansWidth})
    $('.selector').css({'width': musiciansWidth, 'margin-left': musiciansOffset})
  }

  setAboutWidth()

  $(window).scroll(function () {
    console.log($(window).scrollTop());
    console.log($('.screenWraper#musicians').offset().top);

    if ($(window).scrollTop() < $('#second').offset().top) {
      setAboutWidth()
      $('.selector, .rect').css('background-color', '#FFEC00')
    }

    if ($(window).scrollTop() > $('#third').offset().top) {
      setCharityWidth()
      $('.selector, .rect').css('background-color', '#2F6BF2')
    }

    if ($(window).scrollTop() > $('#fifth').offset().top) {
      setProgrammeWidth()
      $('.selector, .rect').css('background-color', '#F9B9AA')
    }

    if ($(window).scrollTop() > $('.screenWraper#musicians').offset().top) {
      setMusiciansWidth()
      $('.selector, .rect').css('background-color', '#FFEC00')
    }

    if ($(window).scrollTop() > $('.screenWraper#musicians').offset().top + 300) {
      $('.sideNavWraper').css({'position': 'absolute', 'margin-top': $('.screenWraper#musicians').offset().top + 300})
    } else {
      $('.sideNavWraper').css({'position': 'fixed', 'margin-top': 0})
    }
  })

  $('.rubric#about').click(function() {
    setAboutWidth()
    $('.selector, .rect').css('background-color', '#FFEC00')
    $('html, body').animate({
      scrollTop: $("#second").offset().top + 100
    }, 1000)
  })

  $('.rubric#charity').click(function() {
    setCharityWidth()
    $('html, body').animate({
      scrollTop: $("#third").offset().top + 100
    }, 1000)
  })

  $('.rubric#programme').click(function() {
    setProgrammeWidth()
    $('html, body').animate({
      scrollTop: $("#fifth").offset().top + 100
    }, 1000)
  })

  $('.rubric#musicians').click(function() {
    setMusiciansWidth()
    $('html, body').animate({
      scrollTop: $(".screenWraper#musicians").offset().top + 100
    }, 1000)
  })
})
