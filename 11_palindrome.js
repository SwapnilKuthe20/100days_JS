//  Write a js function that checks if a given no. is a palindrome.
// Palindrome is a word, phrase, number, or sequence that reads the same backward as forward

function palindrome(inp) {
    let arr = [];
    for (i = 0; i < inp.toString().length; i++) {
        arr.push(inp.toString()[i])
    }
    console.log(arr.reverse().join(''));

}
palindrome(4321);

