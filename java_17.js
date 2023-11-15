// Return values from functions
// It's useful because I can use return values from one function inside another function.

function doubleIt(num) {
    return num * 2
}
function objectMaker(val) {
    return {
        prop: val
    }
}
console.log(objectMaker(20));
// console.log( doubleIt(10))
console.log(objectMaker( doubleIt(100) ));

// It means that by JavaScript allowing me to use the return keyword as described above, I can have multiple function calls, returning data and manipulating values, based on whatever coding challenge I have in front of me. 