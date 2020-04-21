function longestWordChecker(string) {
    let oldWordLength = 0
    let newWordLength = 0

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (element === ' ') {
            if (oldWordLength > newWordLength) {
                oldWordLength = oldWordLength;
                newWordLength = 0;
            }
            else {
                oldWordLength = newWordLength;
                newWordLength = 0;
            }
        } 
        else {
            newWordLength = newWordLength + 1
            if (newWordLength > oldWordLength) {
                oldWordLength = newWordLength;
            }
        }
        console.log(oldWordLength, 'old word');
        console.log(newWordLength, 'new word')
    }
    return oldWordLength;
}

function longestWordChecker(string) {
    let longestLength = 0;
    let strArray = string.split(' ');

    strArray.forEach(word => {
        if(longestLength < word.length) {
            longestLength = word.length;
        }
    });
    return longestLength;
}
