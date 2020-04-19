function isPalindrome(sentence) {
    let lowerCaseSentence = sentence.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z ]/g, '').split("").reverse().join("");
    console.log(lowerCaseSentence);
    let reversedSentence = sentence.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z ]/g, '');
    console.log(reversedSentence);

    if (lowerCaseSentence === reversedSentence) {
        return true
        } 
        else {
            return false
    }
    
    // let lowerCaseSentence = sentence.toLowerCase();
    // console.log(lowerCaseSentence);
    // let replacedSentence = lowerCaseSentence.replace(/\s/g, '');
    // console.log(replacedSentence);
    // let replacedSentence2 = replacedSentence.replace(/[^a-zA-Z ]/g, '');
    // console.log(replacedSentence2);
    // let splitSentence = replacedSentence2.split("");
    // console.log(splitSentence);
    // let reversedSentence = splitSentence.reverse();
    // console.log(reversedSentence);
    // let joinedSentence = reversedSentence.join("");
    // console.log(joinedSentence);

    // if (replacedSentence2 === joinedSentence) {
    //     return true
    // } else {
    //     return false
    // }

}

// Dylan's Solution

function isPalindrome(str) {
    let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reversedStr = forwardStr.split('').reverse().join('');

    return forwardStr === reversedStr;
}
