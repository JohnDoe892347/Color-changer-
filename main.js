
// Colors array
let colors = ['blue','red','yellow','orange'];
// get button
let btn = document.getElementById('button');
// add  event listener
btn.addEventListener('click', function(){
	
	//randomizer
	let randomColor = colors[Math.floor(Math.random() *  colors.length)]
	
	// get container
	let container = document.getElementById("container");
	 container.style.background = randomColor;
	
	
	
})