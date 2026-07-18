
console.log("Page Loaded");

window.addEventListener("load", function () {
    if (window.innerWidth <= 768) {
        alert("📱 Welcome to Mamta Bhojnalaya!\n\nFor the best experience, please rotate your device or use a larger screen.");
    }
});

function orderMessage() {
    alert("🍽️ Thank you for choosing Mamta Bhojnalaya!\n\nYour table reservation request has been received. We look forward to serving you.");
}
function filterGallery(category) {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else if (item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}