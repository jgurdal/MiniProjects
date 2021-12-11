//helper file
export function getCustomProperty(elem, prop) {
    // getComputedStyle(elem) lets us get CSS variables
    // getPropertyValue(prop) returns a string
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}

export function setCustomProperty(elem, prop, value) {
    elem.style.setProperty(prop,value)
}

export function incrementCustomProperty() {
    //get the value add the increment and set the value
    setCustomProperty(elem,prop, getCustomProperty(elem,prop) + inc)
}