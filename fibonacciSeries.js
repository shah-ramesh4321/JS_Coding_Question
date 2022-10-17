
// program to generate fibonacci series up to n terms
function printFibonacci(n){
    let a=0,b=1,c;
    for(let i=0;i<n;i++){
        c=a+b;
        console.log(a)
        a=b;
        b=c;
    }
}

// printFibonacci(5)

// program to generate fibonacci series up to a certain number
let num = 13;
let n1=0,n2=1,nextTerm;
console.log(n1)
console.log(n2)
nextTerm=n1+n2;
while(nextTerm<=num){
    console.log(nextTerm);
    n1=n2;
    n2=nextTerm
    nextTerm=n1+n2;
}