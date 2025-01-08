import { getUsers } from "../API/api";
import { createMarkup } from "./markup";
import { refs } from "./refs";
import { onRemoveClick } from "./func";

getUsers().then(data => {
    const markup = data.map(createMarkup).join('');
    refs.tBody.insertAdjacentHTML('beforeend', markup);
    refs.tBody.addEventListener('click', onRemoveClick);
});