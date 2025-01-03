import { getUsers, createUsers } from "./API/api";
import { createMarkup } from "./JS/markup";

const form = document.querySelector('.js-form');
const userName = document.querySelector('.user-name');
const userNumber = document.querySelector('.user-number');
const comment = document.querySelector('.comment');
const rimPrice = document.querySelector('.user-rim-price');
const lenses = document.querySelector('.user-lenses');
const lensesOD = document.querySelector('.user-lenses-od');
const lensesOS = document.querySelector('.user-lenses-os');
const job = document.querySelector('.job');
const tBody = document.querySelector('.t-body');


form.addEventListener('submit', onSubmit);
getUsers().then(data => {
    const markup = data.map(createMarkup).join('');
    tBody.insertAdjacentHTML('beforeend', markup);
});

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
        job: job.value.trim(),
    };
    createUsers(formData).then(newUser => {
        const markup = createMarkup(newUser);
        tBody.insertAdjacentHTML('beforeend', markup);
        form.reset(); 
    });
}