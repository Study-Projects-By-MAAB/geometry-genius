function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}

// function getValueById(idNameOfInput) {
//     const idNameText = idNameOfInput.value;
//     const idNameValue = parseFloat(idNameText);
//     return idNameValue;
// }

// function setInnerTextById(idNameOfDisplay, area) {
//     const display = document.getElementById(idNameOfDisplay);
//     display.innerText = area;
// }