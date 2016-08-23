var main = function() {
    //This section deals with the dropdown menu toggle when user clicks it comes in and out
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  //This section deals witht he right arrow(next) button for carosel
  $('.arrow-next').click(function() {
    //Creating variables for the slides
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    //Creating variables for the dots
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
      
    //Default of slide to first one when reaching the end
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    //Switches the slides to the next slide
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
      
    //Visally switch the dot as well
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });
    
    
    //Same thing but for reverse
  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

};

$(document).ready(main);