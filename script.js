// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.side-nav a');

    // Smooth scroll to section
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update active section on scroll
    function updateActiveSection() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Initial check for active section
    updateActiveSection();

    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);
});

// Platform switching functionality
let currentSlide = {
    'ios': 0,
    'android': 0
};

function switchPlatform(platform) {
    const tabs = document.querySelectorAll('.platform-tab');
    const contents = document.querySelectorAll('.platform-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    document.querySelector(`button[onclick="switchPlatform('${platform}')"]`).classList.add('active');
    document.getElementById(`${platform}-content`).classList.add('active');
}

function moveSlide(platform, direction) {
    const track = document.querySelector(`#${platform}-content .slider-track`);
    const slides = track.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth + 32; // Including gap
    const maxSlides = slides.length;
    
    currentSlide[platform] = (currentSlide[platform] + direction + maxSlides) % maxSlides;
    
    track.style.transform = `translateX(-${currentSlide[platform] * slideWidth}px)`;
}

// Slider functionality
const sliderStates = {
    ios: { currentIndex: 0 },
    android: { currentIndex: 0 }
};

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Reset sliders to first slide on resize
        sliderStates.ios.currentIndex = 0;
        sliderStates.android.currentIndex = 0;
        document.querySelectorAll('.slider-track').forEach(track => {
            track.style.transform = 'translateX(0%)';
        });
    }, 250);
});

// Initialize sliders
document.addEventListener('DOMContentLoaded', () => {
    const iosSlider = document.querySelector('#ios-content .slider-track');
    const androidSlider = document.querySelector('#android-content .slider-track');
    
    if (iosSlider) {
        iosSlider.style.transform = 'translateX(0%)';
    }
    if (androidSlider) {
        androidSlider.style.transform = 'translateX(0%)';
    }
}); 