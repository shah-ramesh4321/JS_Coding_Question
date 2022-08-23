// Print from 1 to 10 after delaying i seconds

for(let i=1;i<=10;i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000);
}