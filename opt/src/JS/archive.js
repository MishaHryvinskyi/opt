import { getUsers } from "../API/api";
import { createMarkup } from "./markup";

const tBody = document.querySelector('.t-body');

getUsers().then(data => {
    const markup = data.map(createMarkup).join('');
    tBody.insertAdjacentHTML('beforeend', markup);
});