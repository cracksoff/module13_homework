const dir = './assets/doge'

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
}
initSlider()
