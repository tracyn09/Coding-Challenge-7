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