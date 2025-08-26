const transientState = {
    paintColorId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0,
    orderTotal: 0
}

let paintTotal = 0
let interiorTotal = 0
let technologyTotal = 0
let wheelTotal = 0

export const setPaint = (chosenPaintId, price) => {
    transientState.paintColorId = chosenPaintId
    paintTotal = price
    transientState.orderTotal = paintTotal + interiorTotal
    console.log(transientState)
}

export const setInterior = (chosenInteriorId, price) => {
    transientState.interiorId = chosenInteriorId
    interiorTotal = price
    transientState.orderTotal = paintTotal + interiorTotal + technologyTotal + wheelTotal
    console.log(transientState)
}

export const setTechnology = (chosenTech, price) => {
    transientState.technologyId = chosenTech
    technologyTotal = price
    transientState.orderTotal = paintTotal + interiorTotal + technologyTotal + wheelTotal
    console.log(transientState)
}

export const setWheel = (chosenWheel, price) => {
    transientState.wheelId = chosenWheel
    wheelTotal = price
    transientState.orderTotal = paintTotal + interiorTotal + technologyTotal + wheelTotal
    console.log(transientState)
}

export const placeOrder = async () => {
    if((!transientState.paintColorId) && (!transientState.interiorId) && (!transientState.technologyId) && (!transientState.wheelId)) {
        window.alert("Please make all selections!")
    } else {
        const postOrders = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        const response = await fetch("http://localhost:8088/customerOrders", postOrders)

        const newOrderEvent = new CustomEvent("newOrderPlaced")
        document.dispatchEvent(newOrderEvent)
    }
}