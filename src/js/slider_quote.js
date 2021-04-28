import  $ from 'jquery';

$(function() {

  $('.slider-quote').slick({
    draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          draggable: true
        }
      }
    ]
  });
});