import Notiflix from 'notiflix';
import { refs } from "./JS/refs";
import { createUsers } from "./API/api";
import { arrRim, arrJob } from "./JS/data";
import { closeModal, openModal } from "./JS/modal";
import { getSelectedRadioValue, currentDate } from "./JS/func";
import { markupOption, markupRadioBtn, markupKlient } from './JS/markup';

refs.rimPrice.insertAdjacentHTML('beforeend', markupOption(arrRim))
refs.radioEl.insertAdjacentHTML('beforeend', markupRadioBtn(arrJob))

refs.form.addEventListener('submit', onSubmit);
refs.closeModalBtn.addEventListener('click', closeModal);

function onSubmit(e) {
  e.preventDefault();

  const formData = {
    userName: refs.userName.value.trim(),
    number: refs.userNumber.value.trim(),
    comment: refs.comment.value.trim(),
    rimPrice: refs.rimPrice.value,
    lenses: refs.lenses.value.trim(),
    lensesOD: refs.lensesOD.value.trim(),
    lensesOS: refs.lensesOS.value.trim(),
    ton: refs.ton.checked ? refs.ton.value : 0,
    job: getSelectedRadioValue("job"),
    urgency: refs.urgency.checked ? true : false,
    date: currentDate(),
  };

  if (!formData.job) {
    Notiflix.Notify.failure('Будь ласка, оберіть опцію в полі "Робота".');
    return;
  }

  createUsers(formData).then(() => {
    Notiflix.Notify.success('ЗАМОВЛЕННЯ СТВОРЕНО!');
    refs.form.reset(); 
  });

  const modalContent = markupKlient(formData);

  openModal(modalContent);
}