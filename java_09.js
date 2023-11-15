// Arrays are Objects

/*In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.
One of the most commonly used built-in methods on arrays are the push() and the pop() methods.*/
var fruits = ['Banana'];
fruits.push("apple"); 
fruits.push('pear'); 
// console.log(fruits)
fruits.pop()  // To remove the last item from an array,
// console.log(fruits) 

// values of function push into array 
function arrayBuilder(one, two, three) {
    let arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    // console.log(arr);
    return arr;
}
// arrayBuilder('apple', 'pear', 'banana')
let simplevar = arrayBuilder('apple', 'pear', 'banana')
console.log(simplevar)
