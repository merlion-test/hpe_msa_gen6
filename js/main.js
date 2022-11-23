"use strict";

// let privacyContent = document.querySelectorAll('.checkbox-field, .checkbox-field+div');
// document.querySelectorAll('.checkbox-field, .checkbox-field+div').outerHtml = '<div class="form-wrapper">' +privacyContent+'</div>';

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
        // Если прокрутили дальше 1499px, показываем кнопку
        if (pageYOffset > 1500) {
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
  let btnUp = document.querySelector('#button');
  if (window.pageYOffset > 400) {
    btnUp.style.opacity = '1';
  } else {
    btnUp.style.opacity = '0';
  }
}

window.addEventListener('scroll', showButtonUp);
