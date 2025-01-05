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
   const totalPrice = myltiply(lensesOD, lensesOS, rimPrice, job, ton);
   const urgencyClass = urgency ? 'urgency' : '';
    return `
    <tr class="user-list ${urgencyClass}">
        <td class="number-colum">${id}</td>
        <td class="customer">${userName}</td>
        <td class="number">${number}</td>
        <td class="producer">${lenses}</td>
        <td class="price">${rimPrice || 0} грн</td>
        <td class="price">${lensesOD || 0} грн</td>
        <td class="price">${lensesOS || 0} грн</td>
        <td class="price">${job || 0} грн</td>
        <td class="price">${ton} грн</td>
        <td class="comment">${comment || " "}</td>
        <td class="price">${totalPrice} грн</td>
    </tr>`
}

export {
    createMarkup
}