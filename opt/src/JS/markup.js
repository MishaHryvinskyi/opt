function createMarkup({ id, name, lastName, number, rim, lenses, job }) {
    return `
    <tr class="user-list">
        <td>${id}</td>
        <td>${name}</td>
        <td>${lastName}</td>
        <td>${number}</td>
        <td>${rim}</td>
        <td>${lenses}</td>
        <td>${job}</td>
    </tr>`
}

export {
    createMarkup
}