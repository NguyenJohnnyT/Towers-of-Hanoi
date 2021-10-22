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
  console.log(`poles start with the following: `);
  console.log(pole1, pole2, pole3);
  console.log('------start-------')
}

function Towers(n, from, to, spare) {
  if (!started) towersInit(n); //initialize the array
  if (n === 0) return

  Towers(n-1, from, spare, to);
  
  //! Moving the disc
  // console.log(`Move Disc ${n} from `);
  // console.log(from);
  // console.log('to');
  // console.log(to);
  let temp = from.pop();
  to.push(temp);
  // console.log(`--Curent:--`);
  console.log(pole1, pole2, pole3);

  Towers(n-1, spare, to, from);
}

Towers(3, pole1, pole3, pole2);
