
function sortArr(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        
    }
    return arr;
}

let result = sortArr([2,1,10,11,8,6,3,18,4,5])
console.log(result)