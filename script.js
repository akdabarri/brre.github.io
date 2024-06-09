document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide); // Initial call to show the first slide

    // Dropdown Menu
    const navItems = document.querySelectorAll('nav ul li');
    
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });
        
        item.addEventListener('mouseout', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    });

    // Login Modal
    const loginBtn = document.querySelector('a[href="#login"]');
    const loginModal = document.querySelector('.login-modal');
    const closeModal = document.querySelector('.login-modal .close');

    if (loginBtn && loginModal && closeModal) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            loginModal.style.display = 'block';
        });

        closeModal.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    // Prevent default form submission on login modal
    const loginForm = document.querySelector('.login-modal form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Perform login action here, e.g., send data to server
            // Then close the modal or handle response accordingly
            loginModal.style.display = 'none';
        });
    }
});
