var text;
var favDrink = prompt("What's your favorite sodadrink?");
switch (favDrink) {
    case "papsi":
        text = "Excellent choice!papsi is good for your soul.";
        break;
    case "cocakola":
        text = "cocakola is my favorite too!";
        break;
    case "miranda":
        text = "Really? Are you sure themiranda is your favorite?";
        break;
    default:
        text = "I have never heard of that one..";
        break;
}


let age = prompt('whats your age?');

console.log(age);


let userName = 'sohaib';

console.log(userName);



let feeling = confirm('are you good?');

if (feeling === true) {
    console.log('thats great to hear');
} else {
    console.log('hope you feel better soon');
}


let favouriteColor = prompt('what do you like more red/black?');

console.log('before', favouriteColor);

favouriteColor = favouriteColor.toLowerCase();


favouriteColor = favouriteColor.toUpperCase();

console.log('after', favouriteColor);

if (favouriteColor === 'blue') {
    console.log('you like blue more');
} else if (favouriteColor === 'red') {
    console.log('you like red more');
} else {

    console.log('please write red or blue');
}


let fruit = prompt('what is your favourite fruit');

switch (fruit.toUpperCase()) {
    case 'APPLE':
        console.log('apples are 5$ a kilo');
        break;

    case 'orange':
    case 'BANANA':
        console.log('banana and orange are 12$ a kilo');
        break;

    default:
        console.log('sorry we dont have that');
        break;
}

let getRating = function () {

    let stars = prompt('how many starts do you rate our website?');

    if (stars > 5) {
        stars = 5;
    }
    let starResults = '';


    return starResults;
}

document.write(getRating());