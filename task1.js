function calculateTax(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input"
    } else {
        const total = (income - expenses) * .20;
        return total;
    }
}

console.log(calculateTax(6000, -1500))