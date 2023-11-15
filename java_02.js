// Exercise: Practice conditional statements
// Complete the following steps to create: Are You Old Enough? 
var age = 20;
if(age>=65){
    console.log("You get your income from your pension")
}
else if(age<65 && age>=18){
    console.log( "Each month you get a salary")
}
else if(age<18){
    console.log( "You get an allowance")
}
else{
    console.log("The value of the age variable is not numerical")
}


// Code the days of the week program as a switch statement
let day = 'Sunday'
switch (day) {
    case 'Monday':
        console.log('Do something')
        break;
    case 'Tuesday':
        console.log('Read a book')
        break;
    case 'Wednesday':
        console.log('Do something')
        break;
    case 'Thursday':
        console.log('Do something')
        break;
    case 'friday':
        console.log('Do something')
        break;
    case 'Saturday':
        console.log('Do something')
        break;
    case 'Sunday':
        console.log('Do something')
        break;

    default:
        console.log(' Sellected Wrong ')
        break;
}