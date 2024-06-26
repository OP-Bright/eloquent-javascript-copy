
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(num) {
  let count = "";
  for (let i = 1; i <= num; i++) {
    count += "#";
    console.log(count)
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  if (start > end) {
    for (let i = end; i >= start; i--) {
      if (i % 3 === 0) {
        if (i % 5 === 0) {
          console.log("fizzbuzz")
        } else {
          console.log("fizz")
        }
      } else if (i % 5 === 0) {
          console.log("buzz")
      } else {
        console.log(i)
      }
    }
  }
  if (start < end) {
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0) {
        if (i % 5 === 0) {
          console.log("fizzbuzz")
        } else {
          console.log("fizz")
        }
      } else if (i % 5 === 0) {
          console.log("buzz")
      } else {
        console.log(i)
      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
    let chessboard = "";
    let evenCount = 0;
    let even = "";
    while (evenCount < x) {
      if (evenCount % 2 === 0) {
        even += "#"
      } else {
        even += " ";
      }
      evenCount++
    }
    let odd = "";
    let oddCount = 0;
    while (oddCount < x ) {
      if (oddCount % 2 === 0) {
        odd += " "
      } else {
        odd += "#";
      }
      oddCount++
    }
    even += "\n"
    odd += "\n"
    for (let i = 1; i <= x; i++) {
      if (i % 2 === 0) {
        chessboard += even;
      } else {
        chessboard += odd;
      }
    }
    console.log(chessboard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}