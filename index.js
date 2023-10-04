// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
   if(pickUpLocation>42){
    return pickUpLocation - 42


   } 
   else{
    return 42-pickUpLocation

   }  
}

function distanceFromHqInFeet(numberInFeet){
   return distanceFromHqInBlocks(numberInFeet) * 264
}

function distanceTravelledInFeet(start, destination){
    if(start < destination){
        return (destination - start) *264
    }
    else {
        return (start - destination) *264
    }

}

function calculatesFarePrice(start, destination){
    const distance =distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0
    }
    else if (distance >400 && distance <2000){
        const charge = distance - 400
        return .02 * charge

    }
    else if (distance>2000 && distance<2500){
        return 25
    }
    return 'cannot travel that far'
    }
        