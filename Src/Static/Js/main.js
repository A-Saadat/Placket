'use strict'

const $ = document;
const navbar = document.querySelector('.navbar_toggler');
const navDashbord = document.querySelector('.mainNav_dashbord')
const body = $.body;
const blur = document.querySelector('.dark_box')
const close_btn = document.querySelector('.close_btn')


function Click(el) {
    return el.addEventListener('click', () => {
        navDashbord.classList.toggle('open_mainDashbord')
        body.classList.toggle('overflow_hidden')
        blur.classList.toggle('block');
    })
}

Click(navbar)
Click(close_btn)
Click(blur)

window.addEventListener('load', e => {
    let loader = document.querySelector('.loader');
    loader.classList.add = "FadeOut";
    loader.style.display = "none";
    let main = document.querySelector('.MainContent');
    main.style.display = 'block';
})



