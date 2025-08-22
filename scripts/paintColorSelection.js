
export const colorOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()

    let paintColorHTML = `
        <select id="color">
            <option value="0">Prompt to select resource...</option>`

    for (const color of paintColors) {
        paintColorHTML += `<option value="${color.id}">${color.color}</option>`
    }
    return paintColorHTML
}

