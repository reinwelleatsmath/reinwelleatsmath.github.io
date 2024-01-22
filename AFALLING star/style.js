const radius = 25;

const $input = document.querySelector('#input');
const $label = document.querySelector('[for="input"]');
const $visual = document.querySelector('#visual');

const $$angle = document.querySelectorAll('output[data-for="angle"]');
const $$cos = document.querySelectorAll('output[data-for="cos"]');
const $$sin = document.querySelectorAll('output[data-for="sin"]');
const $$tan = document.querySelectorAll('output[data-for="tan"]');
const $$adj = document.querySelectorAll('output[data-for="adj"]');
const $$opp = document.querySelectorAll('output[data-for="opp"]');

const degrees_to_radians = deg => (deg * Math.PI) / 180.0;

const calc = () => {
	// Update CSS Custom Property Value
	const angle_in_degrees = $input.valueAsNumber;
	document.documentElement.style.setProperty('--angle', `${angle_in_degrees}deg`);
	
	// Derive total progress [0-1] from angle
	const progress = angle_in_degrees / 360;
	document.documentElement.style.setProperty('--progress', progress);
	
	// Update outputs (not needed for CSS)
	const angle_in_radians = degrees_to_radians(angle_in_degrees);
	const cos = Math.cos(angle_in_radians);
	const sin = Math.sin(angle_in_radians);
	const tan = Math.tan(angle_in_radians);

	$$angle.forEach($angle => $angle.innerText = angle_in_degrees.toString().padStart(3, '0'));
	$$cos.forEach($cos => $cos.innerText = cos.toFixed(2));
	$$sin.forEach($sin => $sin.innerText = sin.toFixed(2));
	$$tan.forEach($tan => $tan.innerText = tan.toFixed(2));
	$$adj.forEach($adj => $adj.innerText = (radius * cos).toFixed(2));
	$$opp.forEach($opp => $opp.innerText = (radius * sin).toFixed(2));
}

$input.addEventListener('input', calc);
calc();