'use strict';

const button = document.querySelector('.burger-btn');
const dashbord = document.querySelector('.dashbord')
const body = document.querySelector('body')
const close_btn = document.querySelector('.close_btn')

button.addEventListener('click', () => {
	dashbord.classList.toggle('toggler');
	body.classList.toggle('overflow_hidden');
});

close_btn.addEventListener('click', () => {
	dashbord.classList.toggle('toggler');
	body.classList.toggle('overflow_hidden');
})