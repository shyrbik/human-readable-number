module.exports = function toReadable(number){
    let resultString = "";
    if ( (number != 0) && (number !=10)) {

    let arr =(number + "").split("");
    let oneToNine = ["", "one", "two", "three", "four", "five","six", "seven", "eight", "nine"];
    let elevenToNineteen = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                                "sixteen", "seventeen", "eighteen", "nineteen"];
    let tenToNinety = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    switch(arr.length){
        //1-9
        case 1:
        resultString = oneToNine[arr[0]];
        break;
        //11-
        case 2:
         if(number < 20){
         resultString = elevenToNineteen[arr[1]];
         }
         else
         resultString = tenToNinety[arr[0]] + " " + oneToNine[arr[1]];
        //11-
        break;

        case 3:
            if(arr[1] == 1) resultString = oneToNine[arr[0]] + " hundred" + " " + elevenToNineteen[arr[2]];
            else
            resultString = oneToNine[arr[0]] + " hundred " + tenToNinety[arr[1]] + " "+ oneToNine[arr[2]];       
            break;
    }

    }
    else {
        if (number == 0) resultString = "zero";
        if (number == 10) resultString = "ten";
        }

    return resultString;
}


