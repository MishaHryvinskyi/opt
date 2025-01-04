export const myltiply = (a, b, c, d, e) => Number(a) + Number(b) + Number(c) + Number(d) + Number(e);

export function getSelectedRadioValue(name) {
    const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
    return selectedRadio ? selectedRadio.value : null;
}