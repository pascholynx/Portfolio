document.addEventListener('DOMContentLoaded', () => {
 const navLinks = document.querySelectorAll('.nav-links a');
 const scrollToTopButton = document.getElementById('scroll-to-top');
 
 // Smooth scrolling
 for (const link of navLinks) {
  link.addEventListener('click', (e) => {
   e.preventDefault();
   const targetId = e.target.getAttribute('href');
   const target = document.querySelector(targetId);
   if (target) {
    window.scrollTo({
     top: target.offsetTop - 60, // Adjust the offset to compensate for the fixed navigation bar
     behavior: 'smooth',
    });
   }
  });
 }

 // Highlight active navigation links
 const highlightActiveLink = () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  for (const section of sections) {
   const sectionTop = section.offsetTop - 70; // Adjust the offset to compensate for the fixed navigation bar
   const sectionHeight = section.offsetHeight;

   if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {
    const currentLink = document.querySelector(`a[href="#${section.id}"]`);

    for (const link of navLinks) {
     link.classList.remove('active');
    }

    currentLink.classList.add('active');
   }
  }
 };

 // Function for light mode and dark mode
 function toggleMode() {
  var body = document.querySelector("body");
  var header = document.querySelector("header");
  var contact = document.querySelector(".contact");
  var hero = document.querySelector(".hero");
  var skills = document.querySelector(".skills");
  var button = document.querySelector("button");
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  contact.classList.toggle("dark-mode");
  hero.classList.toggle("dark-mode");
  skills.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    button.innerHTML = '<span>Light Mode</span>';
  } else {
    button.innerHTML = '<span>Dark Mode</span>';
  }
 }

 // Show or hide the "scroll to top" button depending on the scroll position
 const toggleScrollToTopButton = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   scrollToTopButton.classList.remove('hidden');
  } else {
   scrollToTopButton.classList.add('hidden');
   }
 };

 // Scroll to the top of the page when the button is clicked
 const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 } ;

 // Add event listener for the toggle button
 const toggleButton = document.querySelector("button");
 toggleButton.addEventListener('click', toggleMode);

 // Add event listeners for the scroll and button click events
window.addEventListener('scroll', toggleScrollToTopButton);
scrollToTopButton.addEventListener('click', scrollToTop);

 window.addEventListener('scroll', highlightActiveLink);
 highlightActiveLink();
});