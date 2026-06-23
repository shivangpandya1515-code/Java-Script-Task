










//IIFE Function : 
// 1. Write a function to validate a 6-digit OTP.

let otp = Number(prompt("Enter 6-Digit OTP: "));

(function (otp){
    if(otp.length === 6){
        alert("Valid OTP...!");
    }else{
        alert("InValid OTP...!");
    }
}(otp));