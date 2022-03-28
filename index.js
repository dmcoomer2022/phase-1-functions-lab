// Code your solution in this file!
function distanceFromHqInBlocks(distance) {

    const headQuarters = 42;
    return Math.abs(
    distance - headQuarters);
}

function distanceFromHqInFeet(streetNumber) {
   let blocks = distanceFromHqInBlocks(streetNumber);
   return 264*blocks
    
 
}

function distanceTravelledInFeet(num1, num2) {
    let distance = Math.abs(num1-num2);
    return distance*264
}

function calculatesFarePrice(start, destination) {
    let fare = 0;
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return fare 
    } else if (distance > 400 && distance <= 2000) {
        
        fare = (distance-400)*0.02;
        return fare
    }   else if (distance > 2000 && distance <= 2500) {
        fare = 25;
        return fare 
    }   else {return 'cannot travel that far'}
}       
