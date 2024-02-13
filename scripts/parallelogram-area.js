// function calculateParallelogramArea() {
//     const bInput = document.getElementById('parallelogram-base')
//     const bText = bInput.value
//     const b = parseFloat(bText)

//     const hInput = document.getElementById('parallelogram-height')
//     const hText = hInput.value
//     const h = parseFloat(hText)

//     const area = b * h

//     const output = document.getElementById('parallelogram-area')
//     output.innerText = area
// }

function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base')
    const height = getInputValueById('parallelogram-height')
    const area = base * height
    setInnerTextById('parallelogram-area', area)
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value
    const input = parseFloat(inputValueText)
    return input
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area
}