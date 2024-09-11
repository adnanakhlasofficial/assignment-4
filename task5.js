function  waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length) {
        return "Invalid Input";
    } else {
        let totalTime = 0;
        for (const element of waitingTimes) {
            totalTime += element;
        }
        totalTime /= waitingTimes.length;
        totalTime = Math.round(totalTime);
        let remaining = totalTime * ((serialNumber - 1) - waitingTimes.length);       
        return remaining;
    }
}

console.log(waitingTime([13, 2], 6));