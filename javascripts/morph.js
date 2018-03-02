var path = $(".firstScreenOvalPath")

$(function() {
  setTimeout(function () {
    $('.firstScreenOval').KUTE.fromTo('#firstScreenOvalPath', {path: '#firstScreenOvalPath' }, { path: '#firstScreenOvalPath2' }).start();
  }, 3000);
})
