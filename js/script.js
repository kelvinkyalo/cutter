function test() {
    var userInput = prompt("enter");
    var final = userInput.slice(0, userInput.length - 1);
    var newEntry = parseInt(userInput.charAt(userInput.length - 1));
    // var final = userInput.slice(0, userInput.length - 1);
    if (isNaN(newEntry)) { return userInput + 1 } else { return final + (newEntry + 1) }
}
test();