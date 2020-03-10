var letters = "abcdefghijklmnopqrstuvsxyz";

const caesarCipher = (word, num) => {
  let temp = "";
  let result = "";
  word.split("");

  for (let i = 0; i < word.length; i++) {
    temp += letters.indexOf(word[i]);
  }

  temp = temp.split("");

  for (let i = 0; i < temp.length; i++) {
    temp[i] = num + parseInt(temp[i]);
  }

  for (let i = 0; i < temp.length; i++) {
    result += letters[temp[i]];
  }

  return result;
};
console.log(caesarCipher("abc", 5));

const plusMinus = numArr => {
  let result = 0;
  let string = "";

  for (let i = 0; i < numArr.length; i++) {
    if (i != 0 && i % 2 == 0) {
      numArr[i] = -numArr[i];
    }
    result += numArr[i];

    if (i != 0 && i % 2 == 1) {
      numArr[i] = "+" + numArr[i];
    }
    string += numArr[i];
  }

  return string + " = " + result;
};

console.log(plusMinus([1, 2, 3, 4, 5]));
console.log(plusMinus([1, 1, 1, 1, 1]));

const isPalindrome = sentence => {
  if (
    sentence.toLowerCase() ==
    sentence
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  }
  return false;
};
console.log(isPalindrome("123321"));
