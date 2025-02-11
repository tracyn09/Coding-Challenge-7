//Task 1
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount
    console.log(`Total Invoice: $${total}`)
}
//Test Case
calculateInvoice(100,0.08,5)