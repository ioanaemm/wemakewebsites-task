var crtSlide = 0;
var slideCount = $('.slide').length;
var MOBILE_BREAKPOINT = 768;
var isMobile = false;
var isMobileNavVisible = false;

$(document).ready(function() {
  enableSlider();
  enableMobileNav();
  distributeShoppingCart();
  distributeNav();
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

function distributeNav() {
  var navCloneDesktop = $('.temp-nav .main-nav-list').clone();
  $('header.desktop nav').append(navCloneDesktop);

  var navCloneMobile = $('.temp-nav .main-nav-list').clone();
  $('nav.mobile').append(navCloneMobile);

  $('.temp-nav .main-nav-list').remove();
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
  if(window.innerWidth < 500) {
    time /= 2;
  }
  TweenMax.to($('.slide-container'), time, {left: -crtSlide * viewportWidth, ease: Power2.easeInOut});
}

function enableMobileNav() {
  $('.drawerContainer').click(toggleMobileNav);
}

function toggleMobileNav() {
  var newMainLeft;
  var newNavLeft;
  if(!isMobileNavVisible) {
    newMainLeft = 250;
    newNavLeft = 0;
  } else {
    newMainLeft = 0;
    newNavLeft = -250;
  }
  isMobileNavVisible = !isMobileNavVisible;
  TweenMax.to($('main'), 0.5, {left: newMainLeft, ease: Power2.easeInOut});
  TweenMax.to($('nav.mobile'), 0.5, {left: newNavLeft, ease: Power2.easeInOut});
}
