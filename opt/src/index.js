import { getUsers, createUsers } from "./API/api";
import { createMarkup } from "./JS/markup";

const form = document.querySelector('.js-form');
const userName = document.querySelector('.user-name');
const userLastName = document.querySelector('.user-last-name');
const userNumber = document.querySelector('.user-number');
const rim = document.querySelector('.user-rim');
const lenses = document.querySelector('.user-lenses');
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
        name: userName.value.trim(),
        lastName: userLastName.value.trim(),
        number: userNumber.value.trim(),
        rim: rim.value.trim(),
        lenses: lenses.value.trim(),
        job: job.value.trim(),
    };
    createUsers(formData).then(newUser => {
        const markup = createMarkup(newUser);
        tBody.insertAdjacentHTML('beforeend', markup);
        form.reset(); 
    });
}