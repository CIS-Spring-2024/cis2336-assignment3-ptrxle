// Function to validate the order form
function validateOrderForm(event) {
    event.preventDefault(); 
    const feedback = document.getElementById('order-feedback');
    feedback.textContent = ''; 

    // Retrieve form values
    const appetizerQuantity = document.getElementById('appetizer-quantity').value;
    const mainCourseQuantity = document.getElementById('main-course-quantity').value;
    const dessertQuantity = document.getElementById('dessert-quantity').value;
    const drinkQuantity = document.getElementById('drink-quantity').value;

  
    let isValid = true;

    // Validate quantities
    [appetizerQuantity, mainCourseQuantity, dessertQuantity, drinkQuantity].forEach((quantity, index) => {
        if (quantity !== "" && (quantity < 1 || quantity > 10)) {
            isValid = false;
            const itemName = ['Appetizer', 'Main Course', 'Dessert', 'Drink'][index];
            feedback.textContent += `${itemName} quantity must be between 1 and 10.\n`;
        }
    });

    // If form is valid, show success message, otherwise display feedback
    if (isValid) {
        feedback.textContent = 'Order submitted successfully!';
        feedback.classList.remove('error');
        feedback.classList.add('success');
    } else {
        feedback.classList.add('error');
    }
}


document.getElementById('orderform').addEventListener('submit', validateOrderForm);
