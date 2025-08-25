import { setWheel } from "./transientState.js"

const wheelChangeHandler = (changeEvent) => {
    if(changeEvent.target.id === "wheel") {
        setWheel(parseInt(changeEvent.target.value), parseInt(changeEvent.target.selectedOptions[0].dataset.price))
    }
}

export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", wheelChangeHandler)

    let wheelHTML = `
        <select id="wheel">
            <option data-price="0" value="0">Select Option</option>`

    for (const wheel of wheels) {
        wheelHTML += `<option data-price="${wheel.price}" value="${wheel.id}">${wheel.sizeStyle}</option>`
    }
    wheelHTML += `</select>`
    return wheelHTML
}