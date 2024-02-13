function calculatePentagonArea() {
    const perimeter = getValueById('pentagon-perimeter')
    const apothem = getValueById('pentagon-apothem')
    const eee = 'pentagon-area'
    area = 0.5 * perimeter * apothem
    setInnerTextById(eee, area)
}

function getValueById(inputId) {
    const inputText = document.getElementById(inputId)
    const inputValue = inputText.value
    const input = parseFloat(inputValue)
    return input
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area
}