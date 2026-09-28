// ==============================
// CONFIGURAÇÃO RÁPIDA
// ==============================
const WHATSAPP_NUMBER = "5511999999999"; // Troque pelo WhatsApp da oficina: 55 + DDD + número
const DEFAULT_MESSAGE = "Olá! Conheci a Skai Preparação Automotiva pelo site e gostaria de saber mais sobre um serviço/projeto.";

function whatsappUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl();
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Filtro do catálogo
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".catalog-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;
    cards.forEach((card) => {
      const shouldShow = selected === "todos" || card.dataset.category === selected;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

// Modal de detalhes
const modal = document.getElementById("detailModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");

function openModal(card) {
  modalTitle.textContent = card.dataset.title;
  modalDescription.textContent = card.dataset.description;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".details-btn").forEach((button) => {
  button.addEventListener("click", () => openModal(button.closest(".catalog-card")));
});
modalClose?.addEventListener("click", closeModal);
modalBackdrop?.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// Ano automático no rodapé
document.getElementById("year").textContent = new Date().getFullYear();
