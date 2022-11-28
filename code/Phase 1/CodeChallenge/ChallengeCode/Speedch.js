function speedDetector (){
    speed = parseInt(prompt("your  current speed: "));
    demerit =(speedLimit-70)/5

    if(speed >= 70){
        demerit = (speed -70)/5 
        console.log(`Points: ${demerit}`)

        if (demerit >= 12){
            console.log("License suspended")
        }
    } else {
        console.log('Ok')

    }   
}
