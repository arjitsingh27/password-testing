// Function to check if a password is strong and return the minimum number of steps required
const strongPasswordSteps = async (password) => {
  // Define the password strength conditions
  const minLength = 6;
  const maxLength = 20;
  const regexLowerCase = /[a-z]/;
  const regexUpperCase = /[A-Z]/;
  const regexDigit = /[0-9]/;
  const regexRepeatingChars = /(\w)\1\1/;

  // Calculate the number of steps required
  let steps = 0;

  if (password.length < minLength) {
    steps += minLength - password.length;
    return {
      steps: steps,
      value: false,
      message: "Password must be Atleast 6 characters",
    };
  } else if (password.length > maxLength) {
    steps += password.length - maxLength;
    return {
      steps: steps,
      value: false,
      message: "Password must be less than 20 characters",
    };
  }

  if (!regexLowerCase.test(password)) {
    steps++;
    return {
      steps: steps,
      value: false,
      message: "Password must contain 1 Lowercase characters",
    };
  }

  if (!regexUpperCase.test(password)) {
    steps++;
    return {
      steps: steps,
      value: false,
      message: "Password must contain 1 Uppercase characters",
    };
  }

  if (!regexDigit.test(password)) {
    steps++;
    return {
      steps: steps,
      value: false,
      message: "Password must contain 1 Digit characters",
    };
  }

  if (regexRepeatingChars.test(password)) {
    steps++;
    return {
      steps: steps,
      value: false,
      message: "Password Do not contain 3 similar character consecutive",
    };
  }
  return {
    steps: steps,
    value: true,
    message: "Successfully created Password",
  };
};

// // Unit test cases
// console.log(strongPasswordSteps("a")); // Output: 5
// console.log(strongPasswordSteps("aA1")); // Output: 3
// console.log(strongPasswordSteps("1337C0d3")); // Output: 0

module.exports = { strongPasswordSteps };
