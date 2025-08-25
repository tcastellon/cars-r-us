const transientState = {
    paintColorId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0,
    orderTotal: 0
}

export const setPaint = (chosenPaintId, price) => {
    transientState.paintColorId = chosenPaintId
    transientState.orderTotal = price
    console.log(transientState)
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechnology = (chosenTech) => {
    transientState.technologyId = chosenTech
    console.log(transientState)
}

export const setWheel = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}