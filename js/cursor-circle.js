const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") {
        return;
    }

    cursorCircle.style.setProperty("--cursor-x", `${event.clientX}px`);
    cursorCircle.style.setProperty("--cursor-y", `${event.clientY}px`);
    cursorCircle.classList.add("is-visible");
});

document.addEventListener("pointerleave", () => {
    cursorCircle.classList.remove("is-visible");
});
