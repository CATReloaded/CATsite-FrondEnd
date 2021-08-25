'use strict'
//.......................news letter layover
const subToNews = document.querySelector('.btn-newsletter');
const exit = document.querySelector('.exit');
const layover = document.querySelector('.lay1');
//hadling newsletter
subToNews.addEventListener('click', function () {
    layover.classList.add('active-layover');
});
exit.addEventListener('click', function () {
    layover.classList.remove('active-layover');
});