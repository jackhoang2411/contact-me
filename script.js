function switchPlatform(platform) {
    // Update tabs
    document.querySelectorAll('.platform-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.platform-tab[onclick*="${platform}"]`).classList.add('active');

    // Update content
    document.querySelectorAll('.platform-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${platform}-content`).classList.add('active');
}

// Slider functionality
const sliderStates = {
    ios: { currentIndex: 0 },
    android: { currentIndex: 0 }
};

function moveSlide(platform, direction) {
    const sliderTrack = document.querySelector(`#${platform}-content .slider-track`);
    const slides = document.querySelectorAll(`#${platform}-content .slide`);
    const totalSlides = slides.length;
    
    // Calculate how many slides to move based on screen width
    let slidesToMove = 3;
    if (window.innerWidth <= 1024) {
        slidesToMove = 2;
    }
    if (window.innerWidth <= 768) {
        slidesToMove = 1;
    }
    
    sliderStates[platform].currentIndex += direction * slidesToMove;
    
    // Handle wrap-around
    if (sliderStates[platform].currentIndex < 0) {
        sliderStates[platform].currentIndex = totalSlides - slidesToMove;
    } else if (sliderStates[platform].currentIndex >= totalSlides) {
        sliderStates[platform].currentIndex = 0;
    }
    
    const slideWidth = 100 / slidesToMove;
    const offset = -sliderStates[platform].currentIndex * slideWidth;
    sliderTrack.style.transform = `translateX(${offset}%)`;
}

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