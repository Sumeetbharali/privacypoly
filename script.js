document.getElementById("deletion-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Hide form and show success message
    document.getElementById("form-container").classList.add("hidden");
    document.getElementById("success-message").classList.remove("hidden");
});

function resetForm() {
    // Show form and hide success message
    document.getElementById("form-container").classList.remove("hidden");
    document.getElementById("success-message").classList.add("hidden");

    // Reset form fields
    document.getElementById("deletion-form").reset();
}
