// Assuming you have an element with class "divMSMTopRanksReveal"
const ranksRevealElement = document.querySelector('.divMSMTopRanksReveal');

// Add a click event listener to hide the element on click
ranksRevealElement.addEventListener('click', function() {
  // Toggle the display property
  if (ranksRevealElement.style.display === 'none' || ranksRevealElement.style.display === '') {
    ranksRevealElement.style.display = 'block'; // Change to 'inline-block' or 'flex' if needed
  } else {
    ranksRevealElement.style.display = 'none';
  }
});
