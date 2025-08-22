import { colorOptions } from "./paintColorSelection.js"
import { interiorOptions } from "./interiorSelection.js"
import { techOptions } from "./techPackageSelection.js"
import { wheelOptions } from "./wheelSelection.js"


const container = document.querySelector("#container")

const render = async () => {
    const colorOptionsHTML = await colorOptions()
    const interiorOptionsHTML = await interiorOptions()
    const techOptionsHTML = await techOptions()
    const wheelOptionsHTML = await wheelOptions()
    
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
        <article class="car-options">
            <section class="tech-options">
                <h2>Technology Packages</h2>
                    ${techOptionsHTML}
            </section>
        </article>
        <article class="car-options">
            <section class="wheel-options">
                <h2>Wheels</h2>
                    ${wheelOptionsHTML}
            </section>
        </article>
        `
    
    container.innerHTML = html
}

render()