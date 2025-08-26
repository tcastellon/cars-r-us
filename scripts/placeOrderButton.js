import { placeOrder } from "./transientState.js"

const handleOrderSubmission = (clickEvent) => {
    if(clickEvent.target.id === "place-order-button") {
        placeOrder()
    }
}

export const submissionButton = () => {
    document.addEventListener("click", handleOrderSubmission)

    return `<button id='place-order-button'>Save Submission</button>`
}