// Retrieve the selected property from sessionStorage
const selectedProperty = JSON.parse(sessionStorage.getItem('selectedProperty'));
console.log(selectedProperty);

// Display property details
if (selectedProperty) {
    // document.getElementById('propertyImage').src = selectedProperty.featuredImage || selectedProperty.featuredMedia;
    document.getElementById('propertyName').textContent = selectedProperty.name;
    document.getElementById('propertyDescription').textContent = selectedProperty.description;
    document.getElementById('propertyLocation').textContent = selectedProperty.location;
    document.getElementById('propertyPrice').textContent = selectedProperty.price;
    document.getElementById('propertyBedrooms').textContent = selectedProperty.bedrooms;
    document.getElementById('propertyBathrooms').textContent = selectedProperty.bathrooms;
    document.getElementById('propertyBER').textContent = selectedProperty.berRating;

     // Initialize the carousel with images
     const carouselImagesContainer = document.getElementById('carouselImages');
     selectedProperty.otherMedia.forEach(media => {
         if (media.type === "image") {
             const img = document.createElement('img');
             img.src = media.src;
             img.alt = selectedProperty.name;
             carouselImagesContainer.appendChild(img);
         }
     });
}

// Carousel JavaScript
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('#carouselImages img');
    if (index >= slides.length) {
        currentIndex = 0; // wrap to first image
    } else if (index < 0) {
        currentIndex = slides.length - 1; // wrap to last image
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.getElementById('carouselImages').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize first slide
showSlide(currentIndex);

// Function to open the modal
function openModal() {
    document.getElementById('bookingModal').style.display = 'flex';
    // jQuery for animation
    $('#bookingModal').fadeIn(500);
}

// Function to close the modal
function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
    //jQuery for animation
    $('#bookingModal').fadeOut(500);
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
