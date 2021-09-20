'use strict'
//...................variables
// ..........projects slider variable
const sliderParentProjects = document.querySelector('.projects-slider-parent');
const indicatorsProjects = document.querySelectorAll('.indicator-project');
const projectsSliderWidth = sliderParentProjects.offsetWidth;
let NumOfProjectSlide = 0;
//events slider variable
const sliderParentEvent = document.querySelector('.events-slider-parent');
const indicatorsEvent = document.querySelectorAll('.indicator-event');
const eventSliderWidth = sliderParentEvent.offsetWidth;
let NumOfEventSlide = 0;
//.......................news letter layover
const subToNews = document.querySelector('.btn-newsletter');
const exit = document.querySelector('.exit');
const layover = document.querySelector('.lay1');
//.....................functions
//........ project slider functions
const handlingScrollingProject = function (i) {
    indicatorsProjects[NumOfProjectSlide].classList.toggle('active');
    NumOfProjectSlide = i;
    indicatorsProjects[NumOfProjectSlide].classList.toggle('active');
    sliderParentProjects.scrollTo({
        left: NumOfProjectSlide * projectsSliderWidth,
        behavior: 'smooth'
    })
}

//.....events slider function 
const handlingScrollingEvent = function (i) {
    indicatorsEvent[NumOfEventSlide].classList.toggle('active');
    NumOfEventSlide = i;
    indicatorsEvent[NumOfEventSlide].classList.toggle('active');
    sliderParentEvent.scrollTo({
        left: NumOfEventSlide * eventSliderWidth,
        behavior: 'smooth'
    })
}




//............hading events
///hadling projects scrolling

indicatorsProjects.forEach((ind, i) => {
    ind.addEventListener('click', function (e) {
        this.setAttribute('disabled', true);
        setTimeout(function () {
            indicatorsProjects[i].removeAttribute('disabled');
        }, 800);
        handlingScrollingProject(i);

    })
})

///hadling event scrolling
indicatorsEvent.forEach((ind, i) => {
    ind.addEventListener('click', function (e) {
        this.setAttribute('disabled', true);
        setTimeout(function () {
            indicatorsEvent[i].removeAttribute('disabled');
        }, 800);
        handlingScrollingEvent(i);

    })
})

//hadling newsletter
subToNews.addEventListener('click', function () {
    layover.classList.toggle('active-layover');
    
});
exit.addEventListener('click', function () {
    layover.classList.remove('active-layover');

});

// handling modal

const registerBtn = document.querySelector('.btn-register')
const bgModal = document.querySelector('.bg-modal')
const closeBtns = Array.from(document.querySelectorAll('.close-btn'))

registerBtn.addEventListener('click', () => {
    bgModal.classList.add('open')
})

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        bgModal.classList.remove('open')
    })
})

const nextBtns = Array.from(document.querySelectorAll('.nxt-btn'))
const submitBtn = document.querySelector('.submit-btn')
const modals = Array.from(document.querySelectorAll('.modal'))

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bgModal.classList.remove('open')
})

nextBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (btn.parentElement.parentElement.parentElement.classList.contains('1')) {
            modals[0].classList.add('hide')
            modals[1].classList.remove('hide')
        }
        if (btn.parentElement.parentElement.parentElement.classList.contains('2')) {
            modals[1].classList.add('hide')
            modals[2].classList.remove('hide')
        }
    })
})

/////////////
const myNav = document.querySelector('nav');
window.onscroll = function () { 
    "use strict";
    if (window.scrollY >= 300) {
        myNav.classList.add('navStyleScroll');
        console.log('we are Down')
    } 
    else {
        myNav.classList.remove('navStyleScroll');
        console.log('stillUp')
    }
};