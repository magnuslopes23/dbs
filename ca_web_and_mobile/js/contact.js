function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert confirming submission
    alert(`Thank you, ${name}! We have received your message and will get back to you at ${email}.`);

    // Optionally, clear the form fields after submission
    document.getElementById('contactForm').reset();
}
