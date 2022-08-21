function isPalindromeNum(num) {
  var rem,
    final = 0;
  var temp = num;
  var number = num;
  
  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }
  if (temp === final) {
    console.log("palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
isPalindromeNum(121);
