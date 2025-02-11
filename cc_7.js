//Task 1
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount
    console.log(`Total Invoice: $${total}`)
}
//Test Case
calculateInvoice(100,0.08,5)

//Task 2
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = (salary / (hoursPerWeek * 52))
    console.log(`Hourly Wage: $${hourlyWage}`)
}
//Test Case
calculateHourlyWage(52000, 40)

//Task 3
const calculateLoyaltyDiscount = (amount,years) => {
    let discountedPrice = 0;
    if (years >= 5) discountedPrice = amount * 0.85;
    else if (years >= 3) discountedPrice = amount * 0.9;
    else if (years < 3) discountedPrice = amount * 0.95;
    console.log(`Discounted Price: $${discountedPrice}`);
}; 
//Test Case
calculateLoyaltyDiscount(100,6)

//Task 4
function calculateShippingCost(weight, location, expedited = false) {
    let shippingCost = 0
    if (location === "USA") shippingCost = 5 + (0.5 * weight)
        else if (location === "Canada") shippingCost = 10 + (0.7 * weight)
    if (expedited) shippingCost += 10;
    console.log(`Shipping Cost: $${shippingCost}`)
};
//Test Case
calculateShippingCost(10, "USA", true)