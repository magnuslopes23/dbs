// Retrieve the selected property from sessionStorage
const selectedProperty = JSON.parse(sessionStorage.getItem('selectedProperty'));
console.log(selectedProperty);

// Display property details
if (selectedProperty) {
    document.getElementById('propertyImage').src = selectedProperty.featuredImage || selectedProperty.featuredMedia;
    document.getElementById('propertyName').textContent = selectedProperty.name;
    document.getElementById('propertyDescription').textContent = selectedProperty.description;
    document.getElementById('propertyLocation').textContent = selectedProperty.location;
    document.getElementById('propertyPrice').textContent = selectedProperty.price;
    document.getElementById('propertyBedrooms').textContent = selectedProperty.bedrooms;
    document.getElementById('propertyBathrooms').textContent = selectedProperty.bathrooms;
    document.getElementById('propertyBER').textContent = selectedProperty.berRating;
}

// Function to open the modal
function openModal() {
    document.getElementById('bookingModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Function to handle form submission
function submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Show confirmation message
    alert(`Thank you, ${name}! Your viewing has been booked. We will contact you at ${email} or ${phone} to confirm.`);
    
    // Close modal and reset form
    closeModal();
    document.getElementById('bookingForm').reset();
}
