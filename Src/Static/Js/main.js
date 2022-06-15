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




