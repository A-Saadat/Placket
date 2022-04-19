'use strict';

const button = document.querySelector('.burger-btn');

button.addEventListener('click', () => {
	button.classList.toggle('active');
})