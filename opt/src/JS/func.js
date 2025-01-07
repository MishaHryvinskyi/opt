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
    const currentHours = date.getHours();
    const currentMinuts = date.getMinutes();
    return `${currentDate.toString().padStart(2, '0')}.${(currentMounth + 1).toString().padStart(2, '0')}.${currentYear} ${currentHours.toString().padStart(2, '0')}:${currentMinuts.toString().padStart(2, '0')}`;
};