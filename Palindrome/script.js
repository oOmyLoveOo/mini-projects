let string = prompt("Enter a string: ");

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('') ? 'It\'s a palindrome' : 'Innit';
}

let result = isPalindrome(string);
alert(result);
