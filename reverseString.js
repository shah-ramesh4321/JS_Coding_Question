//Method 1
function reverseString1(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
}
reverseString1("Ramesh shah");

//=================Method 2=====================
function reverseString2(str) {
  let revStr = str.split("").reverse().join("");
  console.log(revStr);
  // return str.split("").reverse().join("");
}
reverseString2("Ramesh shah");

// ==============Method 3 ==>not recommended================
function reverseString3(str) {
  if (str==="") {
    return "";
  } else {
    return reverseString3(str.substr(1))+str.charAt(0);
  }
}
console.log(reverseString3("Hello0000"));
