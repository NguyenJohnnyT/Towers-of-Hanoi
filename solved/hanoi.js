//! Towers of Hanoi
//
//|        <>        ll       ll                  ll       ll         <>
//|       <ll>       ll       ll     ======>      ll       ll        <ll> 
//|      < ll >      ll       ll     ======>      ll       ll       < ll > 
//|     <  ll  >     ll       ll                  ll       ll      <  ll  > 
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
  console.log('\u001b[0m', `poles start with the following: `);
  console.log('     pole1         pole2   pole3');
  console.log(pole1, ' __ ', pole2, ' __ ', pole3);
  console.log(`\u001b[30;42m--------move the elements!--------\u001b[0m`)
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
  if (!started) towersInit(numDiscs); //initialize the array
  if (numDiscs === 0) return //base case --> 0 discs to move

  //Think about ignoring the nth numDisc, and moving towards the simplest case.  As we approach the simpler case, we are moving the discs to the spare pole, hence the 2nd and 3rd parameters being (from) and (spare) and the auxiliary being (to).
  Towers(numDiscs-1, from, spare, to); 
  
  //! Moving the disc
  //When numDiscs === 0, we go back up the tree to when numDisc === 1, and so on.
  //We now are actually moving the disc or the element to the either the auxiliary or final pole (because we call a second recursion after this)
  let disc = from.pop();
  to.push(disc);
  console.log(pole1, ' __ ', pole2, ' __ ', pole3);

  //We call a second recursion so we can move the disc from the (spare) pole to the (to) pole.
  Towers(numDiscs-1, spare, to, from);
}

//Try playing with small or different disc amounts, and drawing the recursive tree (or use pythontutor) to visualize the code!
numberOfDiscs = 3;
console.log('');
console.log(`\u001b[31;1;4mcalling \u001b[36;1;4mTowers(${numberOfDiscs}, pole1, pole3, pole2)`);

Towers(numberOfDiscs, pole1, pole3, pole2);
