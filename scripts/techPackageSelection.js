import { setTechnology } from "./transientState.js"

const techChangeHandler = (changeEvent) => {
    if(changeEvent.target.id === "technology") {
        setTechnology(parseInt(changeEvent.target.value), parseInt(changeEvent.target.selectedOptions[0].dataset.price))
    }
}

export const techOptions = async () => {
    const response = await fetch("http://localhost:8088/technologyPackages")
    const techPackages = await response.json()

    document.addEventListener("change", techChangeHandler)

    let techPackagesHTML = `
        <select id="technology">
            <option data-price="0" value="0">Select Option</option>`

    for (const tech of techPackages) {
        techPackagesHTML += `<option data-price="${tech.price}" value="${tech.id}">${tech.package}</option>`
    }
    techPackagesHTML += `</select>`
    return techPackagesHTML
}