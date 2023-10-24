export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const botaoAbrir = document.querySelector('[data-modal="img"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');

  if (modalContainer && botaoAbrir && botaoFechar) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("ativo");
    }

    function clickForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clickForaModal);
  }
}
