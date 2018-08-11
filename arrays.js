var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(list, element) {
  return [element, ...list]
}

function destructivelyAddElementToBeginningOfArray(list, element) {
  return list.unshift(element)
}

function addElementToEndOfArray() {
  
}

function 