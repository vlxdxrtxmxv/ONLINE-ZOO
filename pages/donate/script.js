const radios = document.querySelectorAll('.period');
const labels = document.querySelectorAll('.label');

function changeRadio(event) {
	labels.forEach(value => value.classList.remove('checked'));
	for (let i = 0; i < labels.length; i++) {
		if (event.target === labels[i]) {
			radios[i].checked = true;
			labels[i].classList.add('checked');
		}
	}
}

labels.forEach(value => {
	value.addEventListener('click', changeRadio)
});

console.log(radios, labels);