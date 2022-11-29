"use strict";


let animatedBlock = document.querySelector(".count-block");
let timer;
let x = 0;

function count() {
    animatedBlock.innerText = x;
    x++;
    if (x > 45) {
        clearTimeout(timer);
    } else {
        timer = setTimeout(count, 50);
    }
}

function animationInit() {
    document.addEventListener("scroll", scroll);
    function scroll() {
        let point = animatedBlock.getBoundingClientRect().top - window.innerHeight;
        if (point <= 0) {
            document.removeEventListener("scroll", scroll);
            count();
        }
    }
}

animationInit();

function scrollTo(to, duration = 700) {
    const element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#toTop");
    window.addEventListener("scroll", function () {
        // Если прокрутили дальше 1599px, показываем кнопку
        if (pageYOffset > 3000) {
            btn.classList.add("show");
            // Иначе прячем
        } else {
            btn.classList.remove("show");
        }
    });

    // При клике прокручиваем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 600);
    };
});

function showButtonUp() {
  let btnUp = document.querySelector('#getSolutionButton');
  if (window.pageYOffset > 1000) {
    btnUp.style.opacity = '1';
  } else {
    btnUp.style.opacity = '0';
  }
}

window.addEventListener('scroll', showButtonUp);

// Анимация при скролле

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add("_active");
            } else {
                if (!animItem.classList.contains("_anim-no-hide")) {
                    animItem.classList.remove("_active");
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

$(document).ready(function() {
  $('#getSolutionButton').click(function(){
    $.fancybox.open({
      src  : '#getSolutionForm',
      scrolling   : 'hidden',
      opts : {
        afterClose : function( instance, current ) {
          $('.post_ramka').html('');
        }
      }
    });
  });
});