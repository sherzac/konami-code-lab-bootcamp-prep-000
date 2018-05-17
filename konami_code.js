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

/*function init() {
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
	  
*/	  
	  let counter=0;
function init() {
	
  
  
  
document.body.addEventListener('keydown', (e) =>{	
onKeyDownHandler(e)
})

}
  function onKeyDownHandler(e) {
	  
	  console.log(e.key)
	var key = e.key;
  if (key === codes[counter]) {
	  console.log("im here",counter)
    counter++;
    if (counter === codes.length) {
      alert("Hurray!");
      counter = 0;
    }
	} 	else {
		counter = 0;
		}
	}
   init()