function toHex(num) {
  if (num === 0) {
      return "0";
  }

  const hexChars = "0123456789abcdef";
  let result = "";

  while (num !== 0) {
      const digit = num & 15;
      result = hexChars[digit] + result;
      num >>>= 4;
  }

  return result;
}


const num = 26;
const result = toHex(num);
console.log(result); 