
const textWelcome = "Welcome to My Camera Roll";
const typingElementWelcome = document.getElementById("Welcome");
let indexWelcome = 0;

function typeWriterWelcome() {
    if (indexWelcome < textWelcome.length) {
        typingElementWelcome.innerHTML += textWelcome.charAt(indexWelcome);
        indexWelcome++;
        setTimeout(typeWriterWelcome, 100); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriterWelcome();

    const textName = "Zainab Majeed";
    const typingElementName = document.getElementById("name");
    let indexName = 0;

    function typeWriterName() {
        if (indexName < textName.length) {
            typingElementName.innerHTML += textName.charAt(indexName);
            indexName++;
            setTimeout(typeWriterName, 100); 
        }
    }

    typeWriterName();
})


document.addEventListener('DOMContentLoaded', function() {
    const heartEmoji = document.getElementById('heart-emoji1');

    // Add click event listener to the heart emoji
    heartEmoji.addEventListener('click', function() {
        // Calculate a random duration between 2 to 5 seconds (2000 to 5000 milliseconds)
        const duration = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
        scrollToTop(duration);
    });
});

// Function to scroll to the top of the page with smooth animation
function scrollToTop(duration) {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / (duration / 15);
    const cosParameter = scrollHeight / 2;

    let scrollCount = 0;
    let scrollMargin;
    requestAnimationFrame(step);

    function step() {
        if (window.scrollY != 0) {
            scrollCount += 1;
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, (scrollHeight - scrollMargin));
            requestAnimationFrame(step);
        } else {
            window.location.href = 'heart.html';
        }
    }
}


