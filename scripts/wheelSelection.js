
export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let wheelHTML = `
        <select id="wheel">
            <option value="0">Select Option</option>`

    for (const wheel of wheels) {
        wheelHTML += `<option value="${wheel.id}">${wheel.sizeStyle}</option>`
    }
    wheelHTML += `</select>`
    return wheelHTML
}