
const envelope = document.getElementById("envelope");
const modal = document.getElementById("letterModal");
const closeButton = document.getElementById("closeLetter");

let opened = false;

envelope.addEventListener("click", () => {
    if (opened) return;

    opened = true;

    const paperEnvelope = envelope.querySelector(".envelope");

    paperEnvelope.classList.add("open");

    setTimeout(() => {
        modal.classList.add("show");
    }, 1400);
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
});
