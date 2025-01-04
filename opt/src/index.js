import { createUsers } from "./API/api";
import { getSelectedRadioValue } from "./JS/func";
import Notiflix from 'notiflix';

const form = document.querySelector('.js-form');
const userName = document.querySelector('.user-name');
const userNumber = document.querySelector('.user-number');
const comment = document.querySelector('.comment');
const rimPrice = document.querySelector('.user-rim-price');
const lenses = document.querySelector('.user-lenses');
const lensesOD = document.querySelector('.user-lenses-od');
const lensesOS = document.querySelector('.user-lenses-os');
const ton = document.querySelector('.ton');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const formData = {
        userName: userName.value.trim(),
        number: userNumber.value.trim(),
        comment: comment.value.trim(),
        rimPrice: rimPrice.value.trim(),
        lenses: lenses.value.trim(),
        lensesOD: lensesOD.value.trim(),
        lensesOS: lensesOS.value.trim(),
        ton: ton.checked ? ton.value : 0,
        job: getSelectedRadioValue("job"),
    };

    if (!formData.job) {
        Notiflix.Notify.failure('Будь ласка, оберіть опцію в полі "Робота".');
        return;
    }

    createUsers(formData).then(() => {
        Notiflix.Notify.success('ЗАМОВЛЕННЯ СТВОРЕНО!');
        form.reset(); 
    });
}