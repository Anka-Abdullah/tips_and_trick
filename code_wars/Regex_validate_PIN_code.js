/**
 * ATM machines allow 4 or 6 digit PIN codes
 * and PIN codes cannot contain anything
 * but exactly 4 digits or exactly 6 digits.
 * "1234"   -->  true
 * "12345"  -->  false
 * "a234"   -->  false
 */

function validatePIN(pin) {
  let msg;
  const regex = /^[0-9]*$/;
  if (regex.test(pin)) {
    if (pin.length === 4 || pin.length === 6) {
      msg = true;
    } else {
      msg = false;
    }
  }
  else{
    msg = false;
  }
  return msg;
}

///^[0-9]*$/

const pass = "12345";
console.log(validatePIN(pass));
