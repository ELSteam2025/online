const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");
const yearNow = document.getElementById("yearNow");

if (yearNow) {
  yearNow.textContent = new Date().getFullYear();
}

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const teamWrapper = document.getElementById("teamWrapper");
  const teamToggleBtn = document.getElementById("teamToggleBtn");

  if (!teamWrapper || !teamToggleBtn) return;

  teamToggleBtn.addEventListener("click", () => {
    teamWrapper.classList.toggle("open");

    if (teamWrapper.classList.contains("open")) {
      teamToggleBtn.textContent = "Show Less −";
    } else {
      teamToggleBtn.textContent = "Show More +";
    }
  });
});

document.querySelectorAll(".event-photos-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".timeline-card");
    if (!card) return;

    card.classList.toggle("open");

    btn.textContent = card.classList.contains("open")
      ? "Hide Photos"
      : "View Photos";
  });
});
document.querySelectorAll(".teamToggleBtn").forEach((btn) => {
  const section = btn.closest("section");
  const wrapper = section.querySelector(".team-wrapper");

  btn.addEventListener("click", () => {
    wrapper.classList.toggle("open");

    if (wrapper.classList.contains("open")) {
      btn.textContent = "Show Less −";
    } else {
      btn.textContent = "Show More +";
    }
  });
});
