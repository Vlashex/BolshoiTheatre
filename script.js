let first_screen__offset = 0;
const first_screen_sliderLine = document.querySelector('.first-screen__slider-line');
document.querySelector('.first-screen__slider--undo').addEventListener('click',function () {
    if (first_screen__offset>=0){
        first_screen__offset = -1050;
    } else {
        first_screen__offset += 350;
    }
    first_screen_sliderLine.style.left = first_screen__offset+'px'

})
document.querySelector('.first-screen__slider--next').addEventListener('click',function () {
    if (first_screen__offset <= -1050) {
        first_screen__offset = 0;
    } else {
        first_screen__offset -= 350;
    }
    first_screen_sliderLine.style.left = first_screen__offset+'px'
})



//const projects__sliderLine = document.querySelector('.projects__slider');
//document.querySelector('.projects__slider').addEventListener('mouseover', function () {
//    projects__sliderLine.style.width = '25%'
//})


let fixedNavOffset = false;
const fixedNavInner = document.querySelector('.fixed-nav__inner');
const fixedNav = document.querySelector('.fixed-nav');
document.querySelector('.fixed-nav__button').addEventListener('click', function () {
    if (fixedNavOffset === false){
        fixedNavOffset = true;
        fixedNav.style.background = 'none';
        fixedNavInner.style.display = 'none';
    }else {
        fixedNavOffset = false;
        fixedNav.style.background = 'rgba(51, 51, 51, 0.75)';
        fixedNavInner.style.display = 'block';
    }
})