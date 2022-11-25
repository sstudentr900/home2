//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();

$(document).ready(function(){
  	$('#slider').width(sliderWidth*totalSlides);
  
  	$.each($('#slider-wrap ul li'), function() { 
       //set its color
       var c = $(this).attr("data-color");
       $(this).css("background",c);

       //create a pagination
       var li = document.createElement('li');
       $('#pagination-wrap ul').append(li);	   
	  });
  
  	var autoSlider = setInterval(slideRight, 3000);
  	$('#slider-wrap').hover(
  	function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
  	function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
  	);
  
    //next slide 	
    $('#next').click(function(){
      slideRight();
    });
    //previous slide
    $('#previous').click(function(){
      slideLeft();
    });
  
  	//counter
    countSlides();

    //pagination
    pagination();
});

function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}

function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}

function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}