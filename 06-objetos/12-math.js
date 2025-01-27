console.log(
    Math.PI, 
    Math.abs(-15), // 15
    Math.round(15.5), // 16
    Math.round(15.4), // 15
    Math.floor(15.9), // 15
    Math.ceil(15.000001), // 16
    Math.pow(2, 3), // 8
    Math.sqrt(9), // 3
);

console.log(Math.random());

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 10));
