function validateEmail(emailValue) {
    //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(emailValue);
}

function checkForWhitespace(firstValue, secondValue, thirdValue) {
    const whiteSpaceRegex = /s+/;
    return !(whiteSpaceRegex.test(firstValue) || whiteSpaceRegex.test(secondValue) || whiteSpaceRegex.test(thirdValue)
        || firstValue==="" || secondValue==="" || thirdValue==="");
}

function alertTheUser(email) {
    if ((!validateEmail(email))) {
        alert("Invalid email format.");
    } else {
        alert("Thanks for your message!");
    }
}

function changeButtonStatus(){
    console.log("Update button status");
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(checkForWhitespace(name, email, message)) {
        enableButton()
    } else {
        disableButton()
    }
}

function enableButton(){
    document.getElementById('send-btn').disabled = false;
}

function disableButton(){
    document.getElementById('send-btn').disabled = true;
}