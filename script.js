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