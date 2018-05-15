var crtSlide = 0;
var slideCount = $('.slide').length;

$(document).ready(function() {
  enableSlider();
});


function enableSlider() {
  $('#left-arrow').click(prevSlide);
  $('#right-arrow').click(nextSlide);
  $(window).resize(calibrateSlider);
}

function nextSlide() {
  if(crtSlide < slideCount - 1) {
    crtSlide++;
  } else {
    crtSlide = 0;
  }
  animateSlider(1.5);
}

function prevSlide() {
  if(crtSlide > 1) {
    crtSlide--;
  } else {
    crtSlide = slideCount - 1;
  }
  animateSlider(1.5);
}

function calibrateSlider() {
  animateSlider(0);
}

function animateSlider(time) {
  var viewportWidth = $('.slide-viewport').width();
  TweenMax.to($('.slide-container'), time, {left: -crtSlide * viewportWidth, ease: Power2.easeInOut});
}
