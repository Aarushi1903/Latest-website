// Function to open the popup
function openPopup() {
    popup.classList.add("open-popup");
  }
  
  // Function to close the popup
  function closePopup() {
    popup.classList.remove("open-popup");
  }
  
  // Attach event listeners to all "ADD TO CART" buttons
  const addToCartButtons = document.querySelectorAll('.addCart');
  document.getElementById('goToCartBtn').addEventListener('click', function() {
    // Replace 'your_cart_link_here' with the actual URL of your shopping cart page
    window.location.href = "cart_page.html";
  });
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Prevent the default button click behavior
      event.preventDefault();

  
      // Show the popup
      openPopup();
    });
  });
  
  // Attach event listener to the "OK" button in the popup to close it
  const okButton = document.querySelector('.popup button');
  okButton.addEventListener('click', closePopup);
  