
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return hasUpperCase && hasSpecialChar;
}

function validateInput(email, password) {
  return validateEmail(email) && validatePassword(password);
}

export { validateInput, validateEmail, validatePassword };
