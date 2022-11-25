(function($){
	$(function(){

    $(".menu .hover-icon").click(function() {
      if ($(".container").hasClass("perspective")) {
        $(".container").removeClass("perspective");
      }
      else {
        $(".container").addClass("perspective");
      }
    });
    
	
	}); // end of document ready
})(jQuery); // end of jQuery name space