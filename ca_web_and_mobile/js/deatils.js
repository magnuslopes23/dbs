// Retrieve the selected property from sessionStorage
const selectedProperty = JSON.parse(sessionStorage.getItem('selectedProperty'));

// Display property details
if (selectedProperty) {
    document.getElementById('propertyImage').src = selectedProperty.featuredImage || selectedProperty.featuredMedia;
    document.getElementById('propertyName').textContent = selectedProperty.name;
    document.getElementById('propertyDescription').textContent = selectedProperty.description;
    document.getElementById('propertyOrigin').textContent = selectedProperty.origin || "N/A";
    document.getElementById('propertyRoastedIn').textContent = selectedProperty.roastedIn || "N/A";
    document.getElementById('propertyType').textContent = selectedProperty.type || "N/A";
    document.getElementById('propertyCaffeinated').textContent = selectedProperty.caffeinated || "N/A";
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

    alert(`Thank you, ${name}! Your viewing has been booked. We will contact you at ${email} or ${phone} to confirm.`);
    closeModal();
    document.getElementById('bookingForm').reset();
}
