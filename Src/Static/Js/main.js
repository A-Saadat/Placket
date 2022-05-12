'use strict'

const navbar = document.querySelector('.navbar_toggler');
const navDashbord = document.querySelector('.nav_dashbord')
const body = document.querySelector('body')
const blur = document.querySelector('.dark_box')
const close_btn = document.querySelector('.close_btn')


function Click(el) {
    return el.addEventListener('click', () => {
        navDashbord.classList.toggle('open_dashbord')
        body.classList.toggle('overflow_hidden')
        blur.classList.toggle('block');
    })
}

Click(navbar)
Click(close_btn)
Click(blur)
