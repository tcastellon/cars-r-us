
const colorChangeHandler = (changeEvent) => {
    if(changeEvent.target.id === "color") {
        const chosenOption = changeEvent.target.value
        console.log(chosenOption)
    }
}

export const colorOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()
    
    document.addEventListener("change", colorChangeHandler)

    let paintColorHTML = `
        <select id="color">
            <option value="0">Select Option</option>`

    for (const color of paintColors) {
        paintColorHTML += `<option value="${color.id}">${color.color}</option>`
    }
    paintColorHTML += `</select>`
    return paintColorHTML
}