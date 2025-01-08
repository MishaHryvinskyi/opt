import Notiflix from 'notiflix';

import { removeUser } from '../API/api';

export const myltiply = (a, b, c, d, e) => Number(a) + Number(b) + Number(c) + Number(d) + Number(e);

export const getSelectedRadioValue = (name) => {
    const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
    return selectedRadio ? selectedRadio.value : null;
}

export const currentDate = () => {
    const date = new Date();
    const currentMounth = date.getMonth();
    const currentDate =  date.getDate();
    const currentYear = date.getFullYear();
    return `${currentDate.toString().padStart(2, '0')}.${(currentMounth + 1).toString().padStart(2, '0')}.${currentYear}`;
};

export function onRemoveClick ({ target }) {
    if(target.closest('.remove-btn')) {
        const tr = target.closest('tr');
        const userId = tr.id;

        removeUser(userId)
            .then(() => {
                tr.remove();
                Notiflix.Notify.success(`Замовлення № ${userId} успішно видалений!`);
            })
            .catch(error => {
                console.error('Помилка видалення користувача:', error);
            });
    }
}