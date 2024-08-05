// ------Smooth Scrolling------
document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.topnav a');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const navbar = document.querySelector('.topnav');
    const homeSection = document.getElementById('home');

    // Smooth Scrolling when clicking on Navbar Link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

// ------Typing Animation Homepage------
function typeWriter() {
    const textElement = document.getElementById('type-text');
    const txt = textElement.textContent; // Get the text from the HTML element
    const speed = 50; // The speed/duration of the effect in milliseconds
    let i = 0;

    textElement.textContent = ''; // Clear the text initially

    function type() {
        if (i < txt.length) {
            textElement.textContent += txt.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.addEventListener('scroll', function() {
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

    if (homeSectionBottom < 0) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});

// Start the typing animation
typeWriter();

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function() {
        console.log('Dark mode toggle button clicked'); // For debugging
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Light Mode';
        } else {
            darkModeToggle.textContent = 'Dark Mode';
        }
    });
});

// ------Slideshow (Extra section)------
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); //change image every 5 seconds
}