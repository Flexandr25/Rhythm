"use strict"

const reviewsSwiper = document.querySelector('.swiper');

if (reviewsSwiper){
    const swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true, 
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
}
