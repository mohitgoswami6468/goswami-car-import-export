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
