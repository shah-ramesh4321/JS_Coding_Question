function removeDuplicates(arr){
    return [...new Set(arr)]
}

// console.log(removeDuplicates([1,2,1,3,2,4,2,5]))

function removeDup(arr){
    let tempArr= [];
    for(let i=0;i<arr.length;i++){
        if(tempArr.indexOf(arr[i])==-1){
            tempArr.push(arr[i])
        }
    }
    return tempArr;
}
console.log(removeDup([1,2,1,3,2,4,2,5]))