import { colorOptions } from "./paintColorSelection.js"
import { interiorOptions } from "./interiorSelection.js"

const container = document.querySelector("#container")

const render = async () => {
    const colorOptionsHTML = await colorOptions()
    const interiorOptionsHTML = await interiorOptions()

    const html = `
    <h1>Select Car Options</h1>
        <article class="car-options">
            <section class="color-options">
                <h2>Colors</h2>
                    ${colorOptionsHTML}
            </section>
        </article>
        <article class="car-options">
            <section class="interior-options">
                <h2>Interiors</h2>
                    ${interiorOptionsHTML}
            </section>
        </article>
        `
    
    container.innerHTML = html
}

render()