var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){
    katzDeliLine.push(newPerson);
    return "Welcome, "+newPerson+". You are number "+(katzDeliLine.length+1)+" in line.";
}
