
 let newNum;
 let rain= [];
function getHailStorm(num){
  
for(let i = 0; i < num.length; i++){
    let j = num[i];
   if (j % 2 === 1){
        newNum = ((j * 3) + 1);
    } else if(j % 2 === 0){
       newNum /= 2;
    }}
rain.push(newNum);
 console.log(rain);  
 
}
getHailStorm(7);

