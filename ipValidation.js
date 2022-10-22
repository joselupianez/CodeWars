// IP Validation

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:

//     Leading zeros (e.g. 01.02.03.04) are considered invalid
//     Inputs are guaranteed to be a single string

// Solution:
function isValidIP(str) {
    const octets = str.split('.')
    if (octets.length != 4) return false
    for (let i in octets){
      if(!octets[i]) return false;
      if(octets[i].match(/[^0-9]/)) return false;
      if(octets[i].length > 1 && octets[i][0] == '0') return false;
      if(Number(octets[i]) < 0 || Number(octets[i] > 255)) return false;
    }
    return true
}