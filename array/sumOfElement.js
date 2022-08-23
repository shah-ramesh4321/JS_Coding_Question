function sumOfElement(arr){

    // method1

    // let sum=0;
    // for(let i=0;i<arr.length;i++){
    //     sum+=arr[i]
    // }
    // console.log("sum = ",sum);

    //Method2
    let sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue)
    console.log(sum);
}

sumOfElement([1,2,3,4,5])