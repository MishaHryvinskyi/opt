import { refs } from "./refs";

function openModal(content) {
    refs.userOrder.innerHTML = content;
    refs.modalBackdrop.classList.remove('is-hidden');
}
  
function closeModal() {
    refs.modalBackdrop.classList.add('is-hidden');
}

export {
    openModal,
    closeModal
}