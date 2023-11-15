// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    // Initialize an empty array to store updated prices
    const updatedPrices = [];

    // Loop through each dish object in the dishData array
    for (const dish of dishData) {
        // Step 3: Declare a finalPrice variable without assigning it a value
        let finalPrice;

        // Step 4: Check if taxBoolean is true
        if (taxBoolean === true) {
            // Multiply the price by the tax value and assign to finalPrice
            finalPrice = dish.price * tax;
        }
        // Step 5: Check if taxBoolean is false
        else if (taxBoolean === false) {
            // Assign the dish's original price to finalPrice
            finalPrice = dish.price;
        }
        // Step 6: Handle the else case
        else {
            // Log an error message
            console.log("You need to pass a boolean to the getPrices call!");

            // Return to exit the function
            return;
        }
        
        // Step 7: Log dish information
        console.log("Dish: " + dish.name + " Price: $" + finalPrice);

        // Push the updated price and dish name to the updatedPrices array
        updatedPrices.push({
            name: dish.name,
            price: finalPrice
        });
    }

    // Return the array of updated prices
    return updatedPrices;
}


// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    // Step 9: Invoke the getPrices function with taxBoolean as an argument
    const prices = getPrices(taxBoolean);

    // Step 10: Check guests parameter for validity
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        // Step 11: Calculate discount based on the number of guests
        let discount = 0;
        
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        
        // Log the discount value to the console
        console.log('Discount is: $' + discount);
    } else {
        // Step 12: Log an error message for invalid guests parameter
        console.log('The second argument must be a number between 0 and 30');
    }
    
    // Rest of the code for the getDiscount function will go here
}
getDiscount(true, 2);  // Should log: "Discount is: $5"
getDiscount(false, 10); // Should log: "Discount is: $10"
getDiscount();

// Call getDiscount()
