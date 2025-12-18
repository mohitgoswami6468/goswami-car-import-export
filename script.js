function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
// FAQ Accordion
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {
  card.addEventListener("click", () => {
    const answer = card.querySelector(".answer");
    const isVisible = answer.style.display === "block";
    answer.style.display = isVisible ? "none" : "block";
  });
});
