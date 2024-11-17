document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const toggleButton = document.getElementById("toggleButton");
    const sectionTitle = document.getElementById("sectionTitle");

    toggleButton.addEventListener("click", () => {
        // Toggle the black class on the container
        container.classList.toggle("black");

        // Update the title and button text based on the current state
        if (container.classList.contains("black")) {
            sectionTitle.textContent = "Black Section";
            toggleButton.textContent = "Switch to White Section";
        } else {
            sectionTitle.textContent = "White Section";
            toggleButton.textContent = "Switch to Black Section";
        }
    });
});
