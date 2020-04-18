// Solution #1 - but don't know how to allow input of string

function reverseString(string) {
    let reversedString = string.split('').reverse().join('');
    return reversedString;
}

// Solution #2 -

function reverseString(string) {
    let reversedString = [];
    for (let i = 0; i < string.length; i++) {
        reversedString.unshift(string[i]);
        console.log(reversedString);
    }
    reversedString = reversedString.join('')
    return reversedString;
}

// Dylan's Method Solution

function reverseString(word) {
    let reversedWord = word.split('').reverse().join('');
    // console.log(reversedWord);
    // reversedWord = reversedWord.reverse();
    // console.log(reversedWord);
    // reversedWord = reversedWord.join('');

    return reversedWord
}

// Dylan's For-Loop Solution --- * MUCH QUICKER THAN THE METHOD WAY *

function reversedString(word) {
    let reversedWord = '';

    for(let i = word.length - 1; i >= 0; i--) {
        reversedWord = reversedWord + word[i];
    }

    return reversedWord;
}

