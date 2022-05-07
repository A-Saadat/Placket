'use strict';

const button = document.querySelector('.burger-btn');
const dashbord = document.querySelector('.dashbord')
const body = document.querySelector('body')
const close_btn = document.querySelector('.close_btn')
const blur = document.querySelector('.black_box');
const navbar = document.querySelector('.navbar_toggler');
const navDashbord = document.querySelector('.nav_dashbord')


function menu_click(element){
	return element.addEventListener('click', () => {
		dashbord.classList.toggle('toggler');
		body.classList.toggle('overflow_hidden');
		blur.classList.toggle('blur');
	})
}

menu_click(button);
menu_click(close_btn);
menu_click(blur);

