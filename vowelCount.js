function countVowel(str) {
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      vowelCount += 1;
    }
  }
  console.log(vowelCount);
  //Using Regex & match method
  console.log("count==>",str.match(/[aeiou]/gi).length)
}

countVowel("HelloO");

function countEachVowelsPresent(str){
    let newStrArr = str.split("");
    let obj = {};
    for(char of newStrArr){
        if(char.match(/[aeiou]/gi)){
            if(char in obj){
                obj[char]++;
            }else{
                obj[char]=1;
            }
        }
    }
    console.log(obj);

}
countEachVowelsPresent("HelloO")