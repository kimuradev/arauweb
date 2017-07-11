// Commom Plugins
(function($) {
  $('.body').css('opacity', '0');
	$('#cover').fadeOut(1000, function() {
    $('.body').css('opacity', '1');
  });
}).apply(this, [jQuery]);
