// Function to return a string task
export function taskFirst() {
    const task = 'I prefer const when I can.'; // Declare and initialize a constant variable 'task' with a string value
    return task; // Return the 'task' variable
}

// Function to return a string indicating something is okay
export function getLast() {
    return ' is okay'; // Return the string ' is okay'
}

// Function to concatenate a string with the result of calling the 'getLast' function
export function taskNext() {
    let combination = 'But sometimes let'; // Declare and initialize a variable 'combination' with a string value
    combination += getLast(); // Append the result of calling the 'getLast' function to the 'combination' variable

    return combination; // Return the 'combination' variable
}
