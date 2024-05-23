// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Example of dynamically adding a news item
    const newsContainer = document.querySelector('.news-container');

    for (let i = 6; i <= 10; i++) {
        const newsItem = document.createElement('div');
        // newsItem.className = 'news-item';
        // newsItem.textContent = `News Item ${i}`;
        newsContainer.appendChild(newsItem);
        autoScroll();
    }
    function autoScroll() {
        newsContainer.scrollBy({
            top: 2, // adjust this value to control the scroll speed
            behavior: 'smooth'
        });
    
        if (newsContainer.scrollTop >= newsContainer.scrollHeight - newsContainer.clientHeight) {
            newsContainer.scrollTop = 0; // reset to top when reaching the bottom
        }
    }
    setInterval(autoScroll, 50);
});



//setInterval(autoScroll, 50); // adjust this value to control the scroll interval
