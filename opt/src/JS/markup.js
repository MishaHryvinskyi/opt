import { myltiply } from "./func";

function createMarkup({ 
    id,
    userName,
    number,
    rimPrice,
    lenses,
    job,
    lensesOD,
    lensesOS,
    comment,
    ton,
    urgency,
    date
 }) {

   const separite = rimPrice.split(' ');
   const totalPrice = myltiply(lensesOD, lensesOS, separite[1], job, ton);
   const urgencyClass = urgency ? 'urgency' : '';
    return `
    <tr class="user-list ${urgencyClass}">
        <td class="number-colum">${id}</td>
        <td class="customer">${userName}</td>
        <td class="number">${number}</td>
        <td class="producer">${lenses}</td>
        <td class="price">${separite[0]}</td>
        <td class="price">${separite[1] || 0} грн</td>
        <td class="price">${lensesOD || 0} грн</td>
        <td class="price">${lensesOS || 0} грн</td>
        <td class="price">${job || 0} грн</td>
        <td class="price">${ton} грн</td>
        <td class="comment">${comment || " "}</td>
        <td class="price">${totalPrice} грн</td>
        <td class="price">${date}</td>
    </tr>`
};

const markupOption = (rim) => {
    return rim.map(item => `
        <option value="${item}">${item} грн</option>
    `).join('')
};

const markupRadioBtn = (radio) => {
    return radio.map(({ id, price, text }) => `
        <label class="job-wrap" for="${id}">
            <input class="job" id="${id}" name="job" type="radio" value="${price}">${text}
        </label>
    `).join('')
};

const markupKlient = (arr) => {
    const { userName, number, rimPrice, lenses, lensesOD, lensesOS, job, ton } = arr;
    const separite = rimPrice.split(' ');
    const totalPrice = myltiply(lensesOD, lensesOS, separite[1], job, ton);
   
    return `
        <div class="order-wrapper">
            <h2 class="order__color title">Замовник: <span class="accent">${userName}</span></h2>
            <h2 class="order__color title">Номер телефону: <span class="accent">${number}</span></h2>
            <div class="order__lenses-wrap">
                <h3 class="order__title">Оправа: <span class="accent">${rimPrice} грн</span></h3>
                <h3 class="order__title">Лінзи: <span class="accent">${lenses}</span></h3>
                <h3 class="order__title">OD: <span class="accent">${lensesOD} грн</span></h3>
                <h3 class="order__title">OS: <span class="accent">${lensesOS} грн</span></h3>
            </div>
            <div class="order__lenses-wrap">
                <h3 class="order__title">Робота: <span class="accent">${job} грн</span></h3>
                <h3 class="order__title">Тонування: <span class="accent">${ton} грн</span></h3>
            </div>
            <h3 class="title">Загальна вартість: <span class="accent">${totalPrice} грн</span></h3>
       </div>
    `
}

export {
    createMarkup,
    markupOption,
    markupRadioBtn,
    markupKlient
};