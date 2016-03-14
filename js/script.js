$(document).ready(function() {
  
  $('.enter').hide();
  
  $('#plus img').hover(function() {
    $('.enter').fadeIn();
  }, 
  function () {
      $('.enter').fadeOut();
    }
  );

  $(function() {

  	$('#gallery a').lightBox(); // Select all links in object with gallery ID

  });

});