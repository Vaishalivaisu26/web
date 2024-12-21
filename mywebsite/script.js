// Thank you message modal functionality
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('thank-you-message').style.display = 'none';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example function to show the thank you message after form submission (if you add a contact form in the future)
function showThankYouMessage() {
    var thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';
}
