/**
 * Generates a one-time password (OTP) of the specified length.
 *
 * @param {number} length - The length of the OTP to be generated
 * @return {string} The generated one-time password
 */
/*
This code snippet defines a function called generateOTP that takes a length parameter and returns a random numeric string of the specified length
*/

function generateOTP(length) {
    let otp = ''
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10).toString()   
    }
    return otp
}

function generateOTP2() {
    return Math.floor(Math.random() * 900000) + 100000; 
}

console.log(generateOTP(6))

console.log(generateOTP2())