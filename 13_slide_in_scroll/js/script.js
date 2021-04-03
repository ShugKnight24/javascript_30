'use strict';

function debounce(callback, wait = 75, immediate = true) {

	var timeout;

	return function() {
		var context = this,
			args = arguments;

		var later = function() {
			timeout = null;
			if (!immediate) callback.apply(context, args);
		};

		var callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) callback.apply(context, args);
	};
}

const slideInImages = document.querySelectorAll('.slide-in');

function checkSlide(){
	slideInImages.forEach(slideInImage => {

		// Half of image
		const slideInAt = (window.scrollY + window.innerHeight) - (slideInImage.height / 2);
		// Bottom of the image
		const imageBottom = (slideInImage.offsetTop + slideInImage.height)
		const isHalfShown = slideInAt > slideInImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;

		(isHalfShown && isNotScrolledPast)
			? slideInImage.classList.add('active')
			: slideInImage.classList.remove('active');
	});

}

window.addEventListener('scroll', debounce(checkSlide));
