function introduction(firstName, lastName) {
    return `Hi, my name is ${firstName} ${lastName}.`;
}

console.log(introduction('Adam', 'Galek'));

function introduction(firstName, lastName) {
    return "Hi, my name is " + firstName + " " + lastName + ".";
}

console.log(introduction('Adam', 'Galek'));


function introduction() {
    let beginning = "Hi, my name is ";
    let introduction= beginning.concat("Adam Galek");
    return introduction;
}

console.log(introduction())