$(document).ready(function() {
  $('#bio').keyup(function(event) {
    console.log('i changed');
    var count = $('#bio').val().length
    $('#counter').text(count)
  });
});
