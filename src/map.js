let map = new Map();

map.set("Navin", "Java");
map.set("Kiran", "Andorid");
map.set("Chirag", "ML");
map.set("Navin", "Blockchain");

// console.log(map.keys());
// console.log(map.has("Chirag"));
// console.log(map.get("Chirag"));

for (let [k, v] of map) {
	console.log(k, " : ", v);
}
map.forEach((k, v) => {
	console.log(k, " : ", v);
});

let obj = { first: 1, second: 2 };
console.log(Object.values(obj));
let k = Object.keys(obj);
k.forEach((o) => {
	console.log(`There is ${obj[o]} ${o}`);
});

// total
obj = { first: 1, second: 2 };
console.log(Object.values(obj));
k = Object.keys(obj);
let total = 0;
k.forEach((o) => {
	total += obj[o];
	console.log(`There is ${obj[o]} ${o}`);
});
console.log(total);

// Reduce
let data = [
	{
		name: "Summer",
		height: 121,
		mass: 12,
		eye_color: "blue",
		gender: "male",
	},
	{
		name: "Vinnie",
		height: 121,
		mass: 12,
		eye_color: "black",
		gender: "female",
	},
	{
		name: "Sigurd",
		height: 121,
		mass: 12,
		eye_color: "red",
		gender: "female",
	},
];
console.log("---------------------------------------");
// const totalMass = data.reduce((acc, curr) => acc + curr.mass, 0);
// console.log(totalMass);
// const totalHeight = data.reduce((acc, curr) => acc + curr.height, 0);
// console.log(totalHeight);
const eyeCol = data.reduce((acc, curr) => {
	let color = curr.eye_color;
	if (acc[color]) {
		acc[color]++;
	} else {
		acc[color] = 1;
	}
	return acc;
}, {});

console.log(eyeCol);
console.log("=======================================");
// reduce example
let red = [1, 2, 3, 4];
let reducer = red.reduce((accumulator, currentValue, currentIndex, array) => {
	console.log(typeof accumulator, accumulator);
	console.log(
		"acc:",
		accumulator,
		" curVal:",
		currentValue,
		" curIndex:",
		currentIndex,
		" Arrr:",
		array,
	);
}, 0); // initial value => 0
// get total char of names
let totalNameChar = data.reduce(
	(accumulator, currentValue) => (accumulator += currentValue.name.length),
	0,
);
// accumulator value is set by initial value which is provided as 0 at first then it will be array[0].
console.log(reducer, totalNameChar);
