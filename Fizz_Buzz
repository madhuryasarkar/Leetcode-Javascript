/* Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/

var fizzBuzz = function(n) {
    var arr = [],
        str, i=1;
    while( i <= n ){
        str = "";
        if( i%3===0 ) str = 'Fizz';
        if( i%5===0 ) str += 'Buzz';
        if(!str) str += i;
        arr.push( str );
        i++;
    }
    return arr;
};
