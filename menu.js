

const hamburger = document.getElementById('menu-button');
const menu = document.getElementById('hidden-menu');
const hamburgerImg = document.getElementById("hamburger-img");
const menuLinks = document.querySelectorAll('.hidden-menu a'); // Select all menu links
const upArrowButton = document.getElementById('up-arrow-button');
const navLinks = document.querySelectorAll('.side-nav a');
const topNav = document.querySelector('.top-nav');
const sideNav = document.querySelector('.side-nav');
const projectTopNav = document.querySelector('.project-top-nav');

topNav.classList.add('animate');
sideNav.classList.add('animate');


// Remove animation class after the animation ends
setTimeout(() => {
    topNav.classList.remove('animate');
}, 1000); // Match animation duration


// Add click event listener to the hamburger button
hamburger.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show'); // Hide the menu with sliding down
        hamburgerImg.src = "image/menu.png"; // Change hamburger icon back
        console.log("hide menu");
    } else {
        menu.classList.add('show'); // Show the menu with sliding up
        hamburgerImg.src = "image/close.png"; // Change to close icon
        console.log("show menu");
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show'); // Collapse the menu when an option is clicked
        hamburgerImg.src = "image/menu.png"; // Change hamburger icon back to menu
    });
});


// Function to toggle the 'show' class
function toggleUpArrow() {
    if (window.scrollY > 500) {
        upArrowButton.classList.add('show'); // Add class to show the button
        // console.log("scroll");
    } else {
        upArrowButton.classList.remove('show'); // Remove class to hide the button
    }
}

// Add scroll event listener
window.addEventListener('scroll', toggleUpArrow);

// Call once on page load to set the initial state
toggleUpArrow();



// side nav


// Function to detect the current section
function setActiveSection() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Loop through each section and check if the scroll position is within its range
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - 400 && scrollPosition < sectionTop + sectionHeight - 400) {
            // Add 'active' class to the current link
            link.classList.add('active');
        } else {
            // Remove 'active' class from other links
            link.classList.remove('active');
        }
    });
}

// Run the function on scroll and on page load
window.addEventListener('scroll', setActiveSection);
document.addEventListener('DOMContentLoaded', setActiveSection);



// scroll down to hide top nav for project
let lastScrollPosition = 0;
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down, hide the nav
        projectTopNav.classList.add('hidden');
    } else {
        // Scrolling up, show the nav
        projectTopNav.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
});