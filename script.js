const form = document.getElementById("bookingForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkin = document.getElementById("checkin").value;
    const room = document.getElementById("room").value;

    if (!name || !email || !checkin || !room) {
        alert("Please fill in all fields.");
        return;
    }

    modal.style.display = "flex";
    form.reset();
});

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}