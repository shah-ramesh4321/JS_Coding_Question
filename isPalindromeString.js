// function isPalindrome(str){
//     return str.split('').every((char,i)=>{
//         return char === str[str.length-i-1]
//     })
// }


function isPalindrome(str){
    console.log(str.split('').reverse().join(""),str)
    return str.split('').reverse().join("")===str;
}
console.log(isPalindrome("madam"));