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
    comment
 }) {
    
   const totalPrice = myltiply(lensesOD, lensesOS, rimPrice, job);
    return `
    <tr class="user-list">
        <td>${id}</td>
        <td>${userName}</td>
        <td>${number}</td>
        <td>${lenses}</td>
        <td>${rimPrice || 0} грн</td>
        <td>${lensesOD || 0} грн</td>
        <td>${lensesOS || 0} грн</td>
        <td>${job || 0} грн</td>
        <td>${comment || " "}</td>
        <td>${totalPrice} грн</td>
    </tr>`
}

export {
    createMarkup
}