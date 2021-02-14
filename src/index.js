module.exports = function toReadable (number) {
    let resultString = "";
    let arrayForRead = numberToArray(number);
    let numberToWordArray = ["zero", "one", "two", "three", "four", "five","six", "seven", "eight", "nine"];

    for (let i = arrayForRead.length-1; i > 0; i--) {
		
        console.log(arrayForRead[i])
        resultString += numberToWordArray[arrayForRead[i]] + " ";

    }

    return resultString.trim();
}

function numberToArray (numberForArray){
    let arrayForRead = [];
    let i = 0;
    while (numberForArray > 1) {
        arrayForRead[i] = numberForArray%10;
        i++;
    numberForArray = (numberForArray - numberForArray%10) / 10;
       if (numberForArray < 10) {
           arrayForRead[i] = numberForArray;
       }
    }

    return arrayForRead;
}
