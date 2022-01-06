// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
  //make a copy of the original array
  //change this copy, return it
  return [...array, item];
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
  return [item, ...array];
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
  //make a new array
  //copy the original array
  //use slice() to add item at the index
  return [...array.slice(0, index), item, ...array.slice(index)];
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
  //make a new array
  //copy the original array
  // use... to replace a specific position/index within an array
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
  // copy original array
  //
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
  return { ...object, name: newName };
}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {
  return { ...object, needsACupOfTea: !object.needsACupOfTea };
}

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]

export function toggleListItemCompleted(array, index) {
    let item = array.slice(index, index + 1)[0]; //slice the array to get a copy of the specific element we need, then access the first element before assigning it 
    
    const newObj = {
        ...item, //we can only spread an object inside another object
        completed: !array[index].completed //overwrite the property we need to change
    }

    const newList = [
        ...array.slice(0, index), //getting pre-index elements
        newObj, //the specific element we have modified
        ...array.slice(index + 1), //getting post-index elements
    ];

    return newList;

    /* shortform that does the same thing as all of the above
    
    return [
        ...array.slice(0, index), //getting pre-index elements
        {
            ...array.slice(index, index + 1)[0], //getting the specific element from the index, slice() returns an array so we immediately access the first/only element in the array with [0]
            completed: !array[index].completed //then we overwrite the property we need to change
        },
        ...array.slice(index + 1) //getting post-index elements
    ];

    */
}