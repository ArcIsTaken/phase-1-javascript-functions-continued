// code your solution here
function saturdayFun (activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork (activity = "go to the office"){
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(parameter = "*") {
	return function(wrap = "special") {
		return `You are ${parameter}${wrap}${parameter}!`;
	};
}

let result = wrapAdjective("*", "a hard worker");
console.log(result()); 