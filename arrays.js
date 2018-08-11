var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(list, element) {
  return [element, ...list]
}

function destructivelyAddElementToBeginningOfArray(list, element) {
  return list.unshift(element)
}

function addElementToEndOfArray() {
  return [...list, element]
}

function destructivelyAddElementToEndOfArray() {
  return list.push(element)
}

function accessElementInArray(list, index) {
  return list[index]
}

function destructivelyRemoveElementFromBeginningOfArray(list) {
  list.shift()
  return list
}

function removeElementFromBeginningOfArray(list) {
  return list.slice(1)
}