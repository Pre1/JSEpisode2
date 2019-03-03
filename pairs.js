/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
  if (names && names .length > 0) {
  	
  	
  	let random_names = []

  	while (names.length > 0) {
  		random_names.push(names.getRandom())
  	}

  	let res = []
  	let single_p = []
  	for(let i = 0, len = random_names.length; i < len; i++){
  		single_p.push(random_names[i]);
  		if (single_p.length === 2) {
  			res.push(single_p.slice());
  			single_p = [];
  		}
  	}
  	console.log("BEFORE checking if odd")
  	console.log(res)
  	if (single_p.length > 0) {
  		res.push(single_p)
  	}
  	console.log("ODD test || single_p: ", single_p)
  	console.log("AFTER checking if odd")
  	console.log(res)
  	return res
  }
  else { 
  	return []
  }
}

module.exports = pairs;

/**********************************************
* READ ME!!!!
*
* We've included this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}

pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein', 'Lailz', 'Mr Potato']);

