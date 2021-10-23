//! Towers of Hanoi
//
//|        <>        ll       ll                  ll       ll         <>
//|       <ll>       ll       ll     ======>      ll       ll        <ll> 
//|      < ll >      ll       ll     ======>      ll       ll       < ll > 
//|     <  ll  >     ll       ll                  ll       ll      <  ll  > 
//|      pole1     pole2    pole3                pole1    pole2     pole3
//
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
  console.log('     pole1         pole2   pole3');
  console.log(pole1, ' __ ', pole2, ' __ ', pole3);
  console.log('------------start-------------')
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
  //TODO: Base case

  //TODO: A recursive call
  
  //TODO: Move the 'disc'

  //*Prints out the current status of the poles
  console.log(pole1, ' __ ', pole2, ' __ ', pole3);

  //TODO: A second recursive call

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