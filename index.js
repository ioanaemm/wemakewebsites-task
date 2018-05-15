var crtSlide = 0;
var slideCount = $('.slide').length;
var MOBILE_BREAKPOINT = 768;
var isMobile = false;

$(document).ready(function() {
  enableSlider();
  distributeShoppingCart();
  $(window).resize(onWindowResize);
  onWindowResize();
});

function onWindowResize() {
  animateSlider(0);
}

function distributeShoppingCart() {
  var cartCloneDesktop = $('.temp-cart .cart-wrapper').clone();
  $('header.desktop .shopping-cart').append(cartCloneDesktop);

  var cartCloneMobile = $('.temp-cart .cart-wrapper').clone();
  $('header.mobile .shopping-cart').append(cartCloneMobile);

  $('.temp-cart .cart-wrapper').remove();
}

function enableSlider() {
  $('#left-arrow').click(prevSlide);
  $('#right-arrow').click(nextSlide);
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
  if(crtSlide > 0) {
    crtSlide--;
  } else {
    crtSlide = slideCount - 1;
  }
  animateSlider(1.5);
}

function animateSlider(time) {
  var viewportWidth = $('.slide-viewport').width();
  TweenMax.to($('.slide-container'), time, {left: -crtSlide * viewportWidth, ease: Power2.easeInOut});
}
