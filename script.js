var isDate = function (input) {
  // If the user clicks "Cancel" on the prompt, input will be null
  if (input === null || input === "") {
    return false;
  }

  // Create a date object from the input
  const date = new Date(input);

  // Check if the date is valid. 
  // .getTime() returns NaN for invalid dates, and isNaN() catches that.
  return !isNaN(date.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));