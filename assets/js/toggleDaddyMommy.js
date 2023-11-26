  const toggleMomDadySwitch = document.getElementById('toggleMomDadyDivLabelToggleSwitch');
  const toggleMomDadyDisplayText = document.getElementById('toggleMomDadyDisplayText');

  toggleMomDadySwitch.addEventListener('change', function () {
    if (toggleMomDadySwitch.checked) {
      toggleMomDadyDisplayText.innerText = 'Sugar Mommy';
      toggleMommyDaddyText('Mommy');
    } else {
      toggleMomDadyDisplayText.innerText = 'Sugar Daddy';
      toggleMommyDaddyText('Daddy');
    }
  });

  function toggleMommyDaddyText(newText) {
    // Select all elements with class "toggleNameChangeMommyDaddy"
    const elementsToToggle = document.querySelectorAll('.toggleNameChangeMommyDaddy');

    // Update text content for each element
    elementsToToggle.forEach(element => {
      element.innerText = element.innerText.replace(/Daddy|Mommy/g, newText);
    });
  }


let isOriginalImage = true;

function toggleBackground() {
  // Select all elements with class "divMainSecSidesPic"
  const elementsToToggle = document.querySelectorAll('.divMainSecSidesPic');

  // Update the background image for each element
  elementsToToggle.forEach(element => {
    element.style.backgroundImage = isOriginalImage ? 'url("https://s.abcnews.com/images/GMA/210913_fran_ca_1631563227848_hpMain_1x1_992.jpg")' : 'url("https://raw.githubusercontent.com/Freakoverse/Sugar-Daddy-Ranker/main/assets/img/hitheredaddy.webp")';
  });

  // Update the state for the next toggle
  isOriginalImage = !isOriginalImage;
}

// Call this function when the toggle is clicked
document.getElementById('toggleMomDadyDivLabelToggleSwitch').addEventListener('change', toggleBackground);
