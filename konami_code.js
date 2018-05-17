const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
}



let index = 0;

function init() {
	document.body.addEventListener('keydown', function event(e)
	{
	  let key = e.key;
	  
	  if (key === codes[index]) {
	    index++;
	  }
	  
	  if (index === codes.length) {
	    alert("Congratulations, you entered the Konami code!");
	    
	    index = 0;
	  } else {
	    index = 0;
	  }
	  
	  })}