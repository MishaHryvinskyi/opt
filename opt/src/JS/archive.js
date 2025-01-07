import { getUsers } from "../API/api";
import { refs } from "./refs";
import { createMarkup } from "./markup";

getUsers().then(data => {
    const markup = data.map(createMarkup).join('');
    refs.tBody.insertAdjacentHTML('beforeend', markup);
});