// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate email input
function validateEmail(email) {
    return emailRegex.test(email);
}

// Example usage
const loginInput = document.getElementById('login').value;
if (validateEmail(emailInput)) {
    console.log('Email is valid');
} else {
    console.log('Email is invalid');
}
