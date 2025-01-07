const modalBackdrop = document.querySelector('.backdrop');
const userOrder = document.querySelector('.user-order');

function openModal(content) {
    userOrder.innerHTML = content;
    modalBackdrop.classList.remove('is-hidden');
}
  
function closeModal() {
    modalBackdrop.classList.add('is-hidden');
}

export {
    openModal,
    closeModal
}