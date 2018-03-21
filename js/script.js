// 9.2 Array - Merging arrays

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Adam';

if(allNames.indexOf(newName) === -1) {
	var oneMoreName = allNames.push(newName);
}

console.log(oneMoreName);