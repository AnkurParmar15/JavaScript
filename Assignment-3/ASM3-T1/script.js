document.addEventListener("DOMContentLoaded", function () {
  const flavorSelect = document.getElementById("flavor");
  const flavorImage = document.getElementById("flavorImage");
  const sizeForm = document.getElementById("sizeForm");
  const extrasForm = document.getElementById("extrasForm");
  const orderButton = document.getElementById("orderButton");
  const summaryFlavor = document.getElementById("summaryFlavor");
  const summarySize = document.getElementById("summarySize");
  const summaryExtras = document.getElementById("summaryExtras");
  const outputDiv = document.getElementById("output");

 
  // Function to update the flavor image
  function updateFlavorImage() {
    const selectedFlavor = flavorSelect.value;
    if (flavorImages[selectedFlavor]) {
      flavorImage.innerHTML = `<img src="images/${flavorImages[selectedFlavor]}" alt="${selectedFlavor} Smoothie">`;
    } else {
      flavorImage.innerHTML = "";
    }
  }

  // Function to update the order summary
  function updateSummary() {
    summaryFlavor.textContent = flavorSelect.value;
    const selectedSize = document.querySelector('input[name="size"]:checked');
    summarySize.textContent = selectedSize ? selectedSize.value : "Not selected";

    const selectedExtras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(input => input.value);
    summaryExtras.textContent = selectedExtras.length > 0 ? selectedExtras.join(", ") : "None";
  }

  // Event listeners
  flavorSelect.addEventListener("change", updateFlavorImage);
  sizeForm.addEventListener("change", updateSummary);
  extrasForm.addEventListener("change", updateSummary);
  orderButton.addEventListener("click", () => {
    outputDiv.textContent = "Your order has been placed successfully!";
  });

  // Initial updates
  updateFlavorImage();
  updateSummary();
});
