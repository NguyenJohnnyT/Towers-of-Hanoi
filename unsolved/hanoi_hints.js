//! Towers of Hanoi

// !Hints:
// ? Check out more hints on the TODOS below
// ? Use a drawing program (eg. Excalidraw) to visualize how the code works
// ? Visualize step by step how your code works on https://pythontutor.com/javascript.html. Just copy and paste from line 17 down to calling the Towers function
// ? Check out a video to help visualize! https://www.youtube.com/watch?v=rf6uf3jNjbo
// !Rules
// *Can only move one disc at a time to any of the poles
// *The disc underneath cannot be smaller than the one above it
// !Goal
// *Move all discs at one pole to another pole
// !The pieces:
// *Three arrays (the poles)
// *One of these arrays contain a numbers, in sequential order (largest is index 0, smallest is array.length-1)

const pole1 = [];
const pole2 = [];
const pole3 = [];
var started = false

function towersInit(numDiscs) {
  started = !started
  for (let numDisc = numDiscs; numDisc > 0; numDisc--) {
    pole1.push(numDisc)
  }
  console.log(`poles start with the following: `);
  console.log(pole1, pole2, pole3);
  console.log('------start-------')
}

/**
 * Use recursion to follow the rules and achieve the goal mentioned above
 * 
 * @param {number} numDiscs How many discs we start with
 * @param {array} from The initial pole we move the disc from
 * @param {array} to The pole we move the disc to
 * @param {array} spare The auxiliary pole
 */
function Towers(numDiscs, from, to, spare) {
  if (!started) towersInit(numDiscs); //initialize the arrays
  //TODO: Base case: What is the simplest Towers of Hanoi problem? Think numDiscs. It's okay to return nothing.

  //TODO: A recursive call: Move from the initial to the spare
  
  //TODO: Move the 'disc'.  How do we remove the last element of an array and assign it to another one?

  //*Prints out the current status of the poles
  //*Make sure array manipulation code above is between the two recursive calls.
  console.log(pole1, pole2, pole3);

  //TODO: A second recursive call: We finish at the goal poll.

}

Towers(3, pole1, pole3, pole2);
//! Should print:
// poles start with the following:
// [ 3, 2, 1 ] [] []
// ------start-------
// [ 3, 2 ] [] [ 1 ]
// [ 3 ] [ 2 ] [ 1 ]
// [ 3 ] [ 2, 1 ] []
// [] [ 2, 1 ] [ 3 ]
// [ 1 ] [ 2 ] [ 3 ]
// [ 1 ] [] [ 3, 2 ]
// [] [] [ 3, 2, 1 ]