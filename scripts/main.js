import { colorOptions } from "./paintColorSelection.js"
import { interiorOptions } from "./interiorSelection.js"
import { techOptions } from "./techPackageSelection.js"
import { wheelOptions } from "./wheelSelection.js"
import { submissionButton } from "./placeOrderButton.js"
import { orderList } from "./ordersPlacedList.js"

const container = document.querySelector("#container")

const render = async () => {
    const colorOptionsHTML = await colorOptions()
    const interiorOptionsHTML = await interiorOptions()
    const techOptionsHTML = await techOptions()
    const wheelOptionsHTML = await wheelOptions()
    const buttonHTML = submissionButton()
    const ordersHTML = await orderList()
    
    const html = `
    <h1>Select Car Options</h1>
        <div class="car-options">
            <section class="color-options">
                <h2>Colors</h2>
                    ${colorOptionsHTML}
            </section>
        </div>
        <div class="car-options">
            <section class="interior-options">
                <h2>Interiors</h2>
                    ${interiorOptionsHTML}
            </section>
        </div>
        <div class="car-options">
            <section class="tech-options">
                <h2>Technology Packages</h2>
                    ${techOptionsHTML}
            </section>
        </div>
        <div class="car-options">
            <section class="wheel-options">
                <h2>Wheels</h2>
                    ${wheelOptionsHTML}
            </section>
        </div>
        <div class="button">
            ${buttonHTML}
        </div>
        <div class="orders-list">
            <section class="orders">
                <h2>Orders</h2>
                    ${ordersHTML}
            </section>
        </div>
        `
    
    container.innerHTML = html
}

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()