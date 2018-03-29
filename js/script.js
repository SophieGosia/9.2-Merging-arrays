// 9.2 Array - Merging arrays

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Adam';
var oneMoreName;

if (allNames.indexOf(newName) === -1) {
    oneMoreName = allNames.push(newName);
}

console.log(oneMoreName);