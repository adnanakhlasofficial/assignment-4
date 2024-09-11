function sendNotification(email) {
    if (!email.includes("@") || email.match(/@/g).length > 1 || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1) {
        return "Invalid Input";
    } else {
        let emailArray = email.split("@");
        let notification = `${emailArray[0]} sent you email from ${emailArray[1]}`
        return notification;
    }
}

console.log(sendNotification("adnan@gmail.com"))

