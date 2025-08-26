export const orderList = async () => {
    const response = await fetch("http://localhost:8088/customerOrders?_expand=paintColor&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await response.json()

    let ordersHTML = orders.map(
        (order) => {
            return `
                <section class="orders-placed-container">
                    <h3>Order #${order.id}</h3>
                    <p>${order.paintColor.color} car with ${order.wheel.sizeStyle} wheels, ${order.interior.colorMaterial} interior, and the ${order.technology.package} for a total cost of ${order.orderTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                </section>
            `
        }
    )
    const html = ordersHTML.join("")
    return html
}