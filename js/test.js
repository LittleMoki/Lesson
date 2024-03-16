let boxes = document.querySelectorAll('.box')
let input = document.querySelector('.input')
boxes.forEach(el => {
	let prev = el.innerHTML
	el.addEventListener('dblclick', () => {
		// if (el.style.backgroundColor == 'red') {
		// 	el.style.backgroundColor = 'transparent'
		// } else {
		// 	el.style.backgroundColor = 'red'
		// }
		if (el.innerHTML == prev) {
			el.innerHTML = el.innerHTML.split(',').reduce((a, b) => +a + +b)
		} else {
			el.innerHTML = prev
		}
	})
})

input.addEventListener('change', () => {
	boxes.forEach(el => {
		el.addEventListener('click', () => {
			el.innerHTML = input.value
		})
	})
})
