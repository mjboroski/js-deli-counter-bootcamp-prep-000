var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){
    katzDeliLine.push(newPerson);
    return "Welcome, "+katzDeliLine[newPerson]+". You are number "+(katzDeliLine.length+1)+" in line.";
}
