const dir = './assets/doges/doge'

function photos(dir) {
	const files = []
	for (let i = 0; i < 5; i++) {
		files.push(dir + `${i + 1}` + '.jpg')
	}
	return files
}

let slider, wrapperImages

function initSlider() {
	slider = document.querySelector('.slider')
	wrapperImages = document.createElement('div')
	wrapperImages.className = 'slider-wrapper'
	slider.insertBefore(wrapperImages, slider.firstChild)
	photos(dir).forEach((el, i) => {
		wrapperImages.insertAdjacentHTML('beforeend', `<img src="${photos(dir)[i]}" alt="img" />`)
	})
	wrapperImages.firstChild.classList.add('active')

	arrowSlider()
}

function arrowSlider() {
	let wrapperArrows = document.createElement('div')
	wrapperArrows.className = 'slider-nav'
	slider.appendChild(wrapperArrows, slider.firstChild)

	let arrowForward = document.createElement('button')
	arrowForward.className = 'slider-arrow forward'
	arrowForward.setAttribute('type', 'button')
	arrowForward.insertAdjacentHTML('beforeend', `<img src="./assets/arrows/arrow-right.svg" alt="img" class="arrow-svg"/>`)
	wrapperArrows.insertBefore(arrowForward, wrapperArrows.firstChild)

	let arrowBack = document.createElement('button')
	arrowBack.className = 'slider-arrow back'
	arrowBack.setAttribute('type', 'button')
	arrowBack.insertAdjacentHTML('beforeend', `<img src="./assets/arrows/arrow-left.svg" alt="img" class="arrow-svg"/>`)
	wrapperArrows.insertBefore(arrowBack, wrapperArrows.firstChild)

	let sliderArrows = document.querySelectorAll('.slider-arrow')

	for (let arrow of sliderArrows) {
		arrow.addEventListener('click', () => {
			let currentImage = wrapperImages.querySelector('.active')

			let prevImage = currentImage.previousElementSibling || wrapperImages.lastElementChild
			let nextImage = currentImage.nextElementSibling || wrapperImages.firstElementChild

			currentImage.classList.remove('active')

			if (arrow.classList.contains('back')) {
				prevImage.classList.add('active')
			} else {
				nextImage.classList.add('active')
			}
		})
	}
}
initSlider()
