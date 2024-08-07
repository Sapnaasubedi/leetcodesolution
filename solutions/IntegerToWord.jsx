// 273. Integer to English Words
// Solved
// Hard
// Topics
// Companies
// Hint
// Convert a non-negative integer num to its English words representation.

 

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 

// Constraints:

// 0 <= num <= 231 - 1

const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const thousands = ["", "Thousand", "Million", "Billion"];

function numberToWords(num) {
    if (num === 0) return "Zero";
    let words = '';

    function helper(n) {
        if (n === 0) return '';
        else if (n < 20) return belowTwenty[n] + ' ';
        else if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
        else return belowTwenty[Math.floor(n / 100)] + ' Hundred ' + helper(n % 100);
    }

    let i = 0;
    while (num > 0) {
        if (num % 1000 !== 0) {
            words = helper(num % 1000) + thousands[i] + ' ' + words;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return words.trim();
}