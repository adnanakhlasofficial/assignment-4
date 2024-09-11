function calculateFinalScore(obj) {
    if(typeof obj === 'object' && obj.testScore <= 50 && obj.schoolGrade <= 30) {
        let total = obj.testScore + obj.schoolGrade;
        if(obj.isFFamily) {
            total += 20;
        }
        return total >= 80 ? true : false;
        
    } else {
        return "Invalid Input";
    }
}



console.log(calculateFinalScore({ name: "Rajib", testScore: -35,  schoolGrade: 28, isFFamily : true  }));
