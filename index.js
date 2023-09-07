// <----------------- Fundamentals of string ------------------>
const airLine = "Tap Air Karachi";
const plane = "PIA";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airLine.length);

console.log(airLine.indexOf("r"));
console.log(airLine.indexOf("Karachi"));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(-1));
console.log(airLine.slice(-2));

//Example

const middleSeatCheck = function (seat) {
  const se = seat.slice(-1);
  if (se === "B" || se === "E") console.log("You got the middle seat 😐");
  else console.log("You got Lucky 😎");
};
middleSeatCheck("113H");
middleSeatCheck("223B");
middleSeatCheck("231E");
middleSeatCheck("111Z");
