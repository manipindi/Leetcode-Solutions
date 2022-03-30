// Wildcard Pattern Matching: Given a string and a pattern containing wildcard characters, i.e., * and ?, where ? can match to any single character in the string and * can match to any number of characters including zero characters, design an efficient algorithm to check if the pattern matches with the complete string or not.


// let pattern = "x***y"
// let string = "xyxzzxy"

// let pattern = "x***x"
// let string = "xyxzzxy"

// let pattern = "x***x?"
// let string = "xyxzzxy"

let pattern = "?*?y"
let string = "xyxzzxy"


function match(pattern, string)
{

	if (pattern.length == 0 && string.length == 0){
		return true;
	}

	if (pattern.length > 1 && pattern[0] == '*' && string.length == 0){
		return false;
	}
		

	if ((pattern.length >= 1 && pattern[0] == '?') || (pattern.length != 0 && string.length != 0 &&pattern[0] == string[0])){
		return match(pattern.substring(1),string.substring(1));
	}

	if (pattern.length > 0 && pattern[0] == '*'){
		return match(pattern.substring(1), string) || match(pattern, string.substring(1));
	}
				
	return false;
}

let result = match(pattern, string)
if(result === true){
	console.log('Match');
}
else{
	console.log('No Match');
}


//test cases
// Input:  string = “xyxzzxy”, pattern = “x***y”
// Output: Match

// Input:  string = “xyxzzxy”, pattern = “x***x”
// Output: No Match

// Input:  string = “xyxzzxy”, pattern = “x***x?”
// Output: Match

// Input:  string = “xyxzzxy”, pattern = “*”
// Output: Match



