import  $ from 'jquery';

$(function() {

  $('.header__slider').slick({
    draggable: false,
    arrows: false,
    dots: true
    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //       draggable: true
    //     }
    //   }
    // ]
  });
});