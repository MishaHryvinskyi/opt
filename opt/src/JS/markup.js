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
    urgency
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
   
   console.log(totalPrice)
    return `
        <div>
        <h2>Заиовник ${userName}</h2>
        <h2>Номер телефону ${number}</h2>
        <h3>Оправа ${rimPrice} грн</h3>
        <h3>Лінзи ${lenses} грн</h3>
        <h3>OD ${lensesOD} грн</h3>
        <h3>OS ${lensesOS} грн</h3>
        <h3>Робота ${job} грн</h3>
        <h3>Тонування ${ton} грн</h3>
        <h3>Загальна вартість ${totalPrice} грн</h3>
      </div>
    `
}

export {
    createMarkup,
    markupOption,
    markupRadioBtn,
    markupKlient
};