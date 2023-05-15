
var disatncetravelled = 0;
var  pickupLocation = parseInt(prompt("Enter the pickupLocation"));
var start = parseInt(prompt("Enter the start block:"));
var distination = parseInt(prompt("Enter the distination"));


function distanceFromHqInBlocks(pickupLocation) {
  var hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}
  console.log(distanceFromHqInBlocks(pickupLocation)); 

function distanceFromHqInFeet(pickupLocation) {
  var distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  return distanceInBlocks * 264;
}
console.log(distanceFromHqInFeet(pickupLocation)); 

function distanceTravelledInFeet(start, distination) {
  var feetPerBlock = 264;
 var distanceInBlocks = Math.abs(start - distination);
 disatncetravelled = distanceInBlocks * feetPerBlock;
  return distanceInBlocks * feetPerBlock;
}
console.log(distanceTravelledInFeet(start, distination)); 

function calculatesFarePrice() {

  if (disatncetravelled <= 400) {
    return 0;
  } else if (disatncetravelled <= 2000) {
    return (disatncetravelled - 400) * 0.02;
  } else if (disatncetravelled <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
} 

console.log(calculatesFarePrice());


