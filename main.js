
// slider 1
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
        nextEl: ".main__block__four__row__btns__next",
        prevEl: ".main__block__four__row__btns__prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

// slider 2
  let swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".main__block__four__slider1__navigation__next",
      prevEl: ".main__block__four__slider1__navigation__prev",
    },
    pagination: {
        el: ".swiper-pagination1",
      },
  });












// функция перелистывания слайдов 

let next = document.querySelector(".main__block__four__row__btns__next");
let prev = document.querySelector(".main__block__four__row__btns__prev");

function clickAuto() {
    next.click();
}

setTimeout(function() {
    NextTime()
}, 2000); 

function clickNext(count) {
    if (count > 0) {
        next.click();
        setTimeout(function() {
            clickNext(count - 1);
        }, 4000);
    } else {
        clickPrev(3); 
    }
}

function clickPrev(count) {
    if (count > 0) {
        prev.click();
        setTimeout(function() {
            clickPrev(count - 1);
        }, 4000);
    } else {
        
        clickNext(3);
    }
}

clickNext(3); 

// изменение размера img 

let imgW = document.querySelectorAll('.slider__block__img img');

imgW.forEach(img => {
    img.style.width = '320px'
    img.style.height = '320px'

    if (window.innerWidth < 700) {
        img.style.width = '244px'
        img.style.height = '244px'
    } else {
        img.style.width = '320px'
        img.style.height = '320px'
    }
    
});








// изменение цвета точек

let bullets = document.querySelectorAll('.swiper-pagination-bullet');


bullets.forEach(bullet => {
    bullet.style.backgroundColor  = 'black';
});