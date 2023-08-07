function countingValleys(steps, path) {
    var currentPosiotion = 0
    var minusCounter = 0

    for (var i = 0; i < steps; i++) {
        console.log("Round : " + i)
        if (path[i] === "D" && currentPosiotion === 0) {
            minusCounter++
        }
        console.log(minusCounter)
        if (path[i] === "U") { 
            currentPosiotion++
        }
        if (path[i] === "D") { 
            currentPosiotion--
        }
        console.log(currentPosiotion)
    }
    return minusCounter
}

var steps = 12
var path = ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"]
console.log(countingValleys(steps, path));