var crtSlide = 0;
var slideCount = $('.slide').length;
var MOBILE_BREAKPOINT = 768;
var isMobile = false;
var isMobileNavVisible = false;
var isMobileCartVisible = false;

$(document).ready(function() {
  initSlider();
  initMobileCart();
  enableMobileNav();
  distributeShoppingCart();
  distributeNav();
  $(window).resize(onWindowResize);
  onWindowResize();
});

function onWindowResize() {
  animateSlider(0);
  if(isMobileNavVisible) {
    hideMobileNav();
  }
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

function initSlider() {
  $('#left-arrow').click(prevSlide);
  $('#right-arrow').click(nextSlide);
  addSliderMarkers();
  refreshMarkers();
}

function addSliderMarkers() {
  var marker = '<div class="marker"></div>';
  for(var i = 0; i < slideCount; i++) {
    $('.carousel .markers').append($(marker));
  }
  $('.carousel .marker').each(function(index, markerElement) {
    $(markerElement).click(function() {
      crtSlide = index;
      animateSlider(1.5);
    });
  });
}

function refreshMarkers() {
  $('.carousel .marker').removeClass('selected');
  $('.carousel .marker').each(function(index, markerElement) {
    if(index === crtSlide) {
      $(markerElement).addClass('selected');
    }
  });
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
  refreshMarkers();
}

function enableMobileNav() {
  $('.drawerContainer').click(toggleMobileNav);
}

function toggleMobileNav() {
  if(isMobileNavVisible) {
    hideMobileNav();
  } else {
    showMobileNav();
  }
}

function showMobileNav() {
  isMobileNavVisible = true;
  TweenMax.to($('main'), 0.5, {left: 250, ease: Power2.easeInOut});
  TweenMax.to($('nav.mobile'), 0.5, {left: 0, ease: Power2.easeInOut});
}

function hideMobileNav() {
  isMobileNavVisible = false;
  TweenMax.to($('main'), 0.5, {left: 0, ease: Power2.easeInOut});
  TweenMax.to($('nav.mobile'), 0.5, {left: -250, ease: Power2.easeInOut});
}

function initMobileCart() {
  $('header.mobile .shopping-cart .cart-icon').click(toggleMobileCart);
}

function toggleMobileCart() {
  if(isMobileCartVisible) {
    $('header.mobile .shopping-cart .cart-wrapper').hide();
  } else {
    $('header.mobile .shopping-cart .cart-wrapper').show();
  }
  isMobileCartVisible = !isMobileCartVisible;
}
