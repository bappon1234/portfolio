// Select all the navigation menu items
const navItems = document.querySelectorAll('nav a');

// Add an event listener to each navigation menu item
navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    // Prevent the default link behavior
    e.preventDefault();

    // Get the section ID from the data-section attribute
    const sectionId = item.getAttribute('data-section');

    // Scroll to the corresponding section
    const section = document.querySelector(`.${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});