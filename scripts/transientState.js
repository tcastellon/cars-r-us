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

