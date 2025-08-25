import { setInterior } from "./transientState.js"

const interiorChangeHandler = (changeEvent) => {
    if(changeEvent.target.id === "interior") {
        const chosenOption = changeEvent.target.value
        setInterior(parseInt(chosenOption))
    }
}

export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", interiorChangeHandler)

    let interiorHTML = `
        <select id="interior">
            <option value="0">Select Option</option>`

    for (const interior of interiors) {
        interiorHTML += `<option value="${interior.id}">${interior.colorMaterial}</option>`
    }
    interiorHTML += `</select>`
    return interiorHTML
}