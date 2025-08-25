import { setTechnology } from "./transientState.js"

const techChangeHandler = (changeEvent) => {
    if(changeEvent.target.id === "technology") {
        const chosenOption = changeEvent.target.value
        setTechnology(parseInt(chosenOption))
    }
}

export const techOptions = async () => {
    const response = await fetch("http://localhost:8088/technologyPackages")
    const techPackages = await response.json()

    document.addEventListener("change", techChangeHandler)

    let techPackagesHTML = `
        <select id="technology">
            <option value="0">Select Option</option>`

    for (const tech of techPackages) {
        techPackagesHTML += `<option value="${tech.id}">${tech.package}</option>`
    }
    techPackagesHTML += `</select>`
    return techPackagesHTML
}