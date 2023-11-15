// Exercise: Error prevention
// function addTwoNums(a, b) {
//     try {
//         if(typeof(a) != 'number') {
//             throw new ReferenceError('the first argument is not a number')
//         } else if (typeof(b) != 'number') {
//             throw new ReferenceError('the second argument is not a number')
//         } else {
//             console.log(a + b)
//         } 
//     }catch (err) {
//         console.log('Error! ', err)
//     }
// }
// addTwoNums("5", 5)
// console.log("It still works")

// simple example
try {
    hahahah
} catch (error) {
    console.log(error)  //if want to know error that use this
}
console.log('But program execute')