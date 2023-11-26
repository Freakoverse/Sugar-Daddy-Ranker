function calculateRank() {

const toggleMomDadySwitch = document.getElementById('toggleMomDadyDivLabelToggleSwitch');
  const toggleMomDadyDisplayText = document.getElementById('toggleMomDadyDisplayText');

  toggleMomDadySwitch.addEventListener('change', function () {
    if (toggleMomDadySwitch.checked) {
      toggleMomDadyDisplayText.innerText = 'Sugar Mommy';
    } else {
      toggleMomDadyDisplayText.innerText = 'Sugar Daddy';
    }
  });

  // Fetch all cards and calculate the total value
  const cards = document.querySelectorAll('.cardthing');
  let totalValue = 0;

  cards.forEach(card => {
    const inputValue = parseInt(card.querySelector('input').value, 10);
    const cardValue = parseInt(card.getAttribute('data-value'), 10);
    totalValue += inputValue * cardValue;
  });

  // Add custom value
  const customValue = parseInt(document.getElementById('customValue').value, 10) || 0;
  totalValue += customValue;

  // Determine the rank based on the total value
  let rank = "";
  const isMommy = toggleMomDadySwitch.checked;

    if (totalValue > 1000000) rank = isMommy ? "Sugarplum Sponsor Mommy" : "Sugarplum Sponsor Daddy";
    else if (totalValue > 500000) rank = isMommy ? "Honey Mommy" : "Honey Daddy";
    else if (totalValue > 250000) rank = isMommy ? "Nectar Mommy" : "Nectar Daddy";
    else if (totalValue > 100000) rank = isMommy ? "Sugar Mommy" : "Sugar Daddy";
    else if (totalValue > 50000) rank = isMommy ? "Lollipop Lady Mommy" : "Lollipop Lord Daddy";
    else if (totalValue > 10000) rank = isMommy ? "Sweetheart Sponsor Mommy" : "Sweetheart Sponsor Daddy";
    else if (totalValue > 5000) rank = isMommy ? "Toffee Tycoon Mommy" : "Toffee Tycoon Daddy";
    else if (totalValue > 1000) rank = isMommy ? "Candy Momma Mommy" : "Candy Poppa Daddy";
    else if (totalValue > 500) rank = isMommy ? "Jellybean Benefactor Mommy" : "Jellybean Benefactor Daddy";
    else if (totalValue > 250) rank = isMommy ? "Marshmallow Maestro Mommy" : "Marshmallow Maestro Daddy";
    else if (totalValue > 100) rank = isMommy ? "Fudge Financier Mommy" : "Fudge Financier Daddy";
    else if (totalValue > 50) rank = isMommy ? "Caramel Captain Mommy" : "Caramel Captain Daddy";
    else if (totalValue > 10) rank = isMommy ? "Bonbon Backer Mommy" : "Bonbon Backer Daddy";
    else if (totalValue >= 1) rank = isMommy ? "Newbie Mommy" : "Newbie Daddy";
    else if (totalValue === 0) rank = isMommy ? "Not A Mommy" : "Not A Daddy";
    else if (totalValue < 0) rank = isMommy ? "You're The Sugar Mommy" : "You're The Sugar Daddy";

  // Display the result in a modal
  document.getElementById('rankResult').innerText = rank;
  document.body.style.overflow = 'hidden';  // Disable scrolling
  document.getElementById('rankModal').style.display = 'flex';

  // Set the rank for sharing on Twitter
  document.getElementById('twitterShareRank').innerText = rank;
}

function closeModal() {
  document.getElementById('rankModal').style.display = 'none';
  document.body.style.overflow = 'auto';  // Enable scrolling
}

function incrementValue(button) {
  // Find the input field associated with the clicked button
  const inputField = button.parentNode.querySelector('.cardthingGroupInput');

  // Increment the value by 1 and update the input field
  inputField.value = parseInt(inputField.value, 10) + 1;
}

function decrementValue(button) {
  // Find the input field associated with the clicked button
  const inputField = button.parentNode.querySelector('.cardthingGroupInput');

  // Ensure the value doesn't go below 0
  if (parseInt(inputField.value, 10) > 0) {
    // Decrement the value by 1 and update the input field
    inputField.value = parseInt(inputField.value, 10) - 1;
  }
}

function addCustomValue() {
  // Fetch the custom value input field
  const customValueInput = document.getElementById('customValue');

  // Increment the custom value by 1 and update the input field
  customValueInput.value = parseInt(customValueInput.value, 10) + 1;
}

function subtractCustomValue() {
  // Fetch the custom value input field
  const customValueInput = document.getElementById('customValue');

  // Ensure the custom value doesn't go below 0
  if (parseInt(customValueInput.value, 10) > 0) {
    // Decrement the custom value by 1 and update the input field
    customValueInput.value = parseInt(customValueInput.value, 10) - 1;
  }
}

function shareOnTwitter() {
  // Get the rank for sharing on Twitter
  const rank = document.getElementById('twitterShareRank').innerText;

  // Your website URL (replace with your actual URL)
  const url = 'https://yourwebsite.com';

  // Get the current text to be included in the tweet
  let tweetText = `My sugar daddy's rank is ${rank}.%0A%0AIs your daddy better than mine?%0A${url}%0A%0A&hashtags=SugarDaddy,SugarDaddyRanker`;

  // Check the state of the toggle
  const toggleMomDadySwitch = document.getElementById('toggleMomDadyDivLabelToggleSwitch');
  if (toggleMomDadySwitch.checked) {
    // Replace occurrences of "Daddy" with "Mommy"
    tweetText = tweetText.replace(/Daddy/g, 'Mommy');
    // Replace occurrences of "daddy" with "mommy"
    tweetText = tweetText.replace(/daddy/g, 'mommy');
    // Append hashtags for SugarMommy
    tweetText += '&hashtags=SugarDaddy,SugarDaddyRanker';
  }

  // Create the Twitter share URL with the updated text
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

  // Open a new window with the Twitter share URL
  window.open(twitterShareUrl, '_blank');
}
