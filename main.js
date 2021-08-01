// Array
let colors = ['Blue','Red','Orange','Black','Yellow'];
// Get button 
let btn = document.getElementById("btn");
// Add event listener
btn.addEventListener('click' ,function(){
	// Randomizer
	let randomizer = colors[Math.floor(Math.random() *  colors.length)];
	// Container
	let container = document.getElementById("container");
		 container.style.background = randomizer;
	
	
	
	
})