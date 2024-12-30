
const cursor = document.getElementById('cursor');

// Update cursor position on mousemove
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Add hover effects for hover targets
document.querySelectorAll('.hover-target').forEach((target) => {
    target.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
        cursor.style.backgroundColor = "#24D298";
    });

    target.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = "#2e2e2e";
    });
});

