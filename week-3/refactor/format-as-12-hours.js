// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:


// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable


function formatAs12HourClock(time) {
  const hour = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  if (hour === 0) {
    return `12:${minutes} am`;
  } else if (hour === 12) {
    return `12:${minutes} pm`;
  } else if (hour > 12) {
    return `${hour - 12}:${minutes} pm`;
  } else {
    return `${hour}:${minutes} am`;
  }
}

// Assertions
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "8:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "5:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("00:15");
const targetOutput4 = "12:15 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
