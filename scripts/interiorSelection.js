import { setInterior } from "./transientState.js"

const interiorChangeHandler = (changeEvent) => {
    if(changeEvent.target.id === "interior") {
        setInterior(parseInt(changeEvent.target.value), parseInt(changeEvent.target.selectedOptions[0].dataset.price))
    }
}

export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", interiorChangeHandler)

    let interiorHTML = `
        <select id="interior">
            <option data-price="0" value="0">Select Option</option>`

    for (const interior of interiors) {
        interiorHTML += `<option data-price="${interior.price}" value="${interior.id}">${interior.colorMaterial}</option>`
    }
    interiorHTML += `</select>`
    return interiorHTML
}