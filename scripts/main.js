import { colorOptions } from "./paintColorSelection.js"

const container = document.querySelector("#container")

const render = async () => {
    const colorOptionsHTML = await colorOptions()

    const html = `
    <h1>Select Car Options</h1>
        <article class="car-options">
            <section class="color-options">
                <h2>Colors</h2>
                    ${colorOptionsHTML}
            </section>
        </article>`
    
    container.innerHTML = html
}

render()