import { setPaint } from "./transientState.js"

const colorChangeHandler = (changeEvent) => {
    if(changeEvent.target.id === "color") {
        setPaint(parseInt(changeEvent.target.value), parseInt(changeEvent.target.selectedOptions[0].dataset.price))
    }
}

export const colorOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()
    
    document.addEventListener("change", colorChangeHandler)

    let paintColorHTML = `
        <select id="color">
            <option data-price="0" value="0">Select Option</option>`

    for (const color of paintColors) {
        paintColorHTML += `<option data-price="${color.price}" value="${color.id}">${color.color}</option>`
    }
    paintColorHTML += `</select>`
    return paintColorHTML
}