var givenString= "     Hey you are doing good, keep it up       ";

function stringHandsOn(){
    console.log(givenString);
    var beforeTrim= givenString.length;
    console.log("Length of string:",beforeTrim);
    console.log("string with trim:",givenString.trim());
    console.log("total no of spaces present:", beforeTrim-givenString.trim().length);
    console.log("First character:",givenString.trim().charAt(0));
    console.log("Last character:",givenString.trim().charAt(givenString.trim().length-1));
    console.log("count of total words available after trim:",givenString.trim().length);
    console.log("index:", givenString.trim().indexOf("good"));
    console.log("index 22 using substring:",givenString.trim().substring(22));
    console.log("index 22 using slicing:",givenString.trim().slice(22, -1));
    console.log("string ends with", givenString.trim().endsWith("up"));
    console.log("string starts with", givenString.trim().startsWith("Hey"));
}
stringHandsOn();