// 1. Find the sum of all the multiples of 3 or 5 below 1000.

// var sum = 0;
// for(var i = 0; i < 1000;i++ ){
//     if(i %3 ==0 || i % 5 ==0 ){
//         sum += i;
//     }
// }
// console.log(sum);
// alert('Numberrrr is:' + sum);

// console.log(sum);

// 2. Create a function to find the sum of all the multiples of a or b below n.
// (a,b,n) are function parameters

var sum = 0;
let myFunction = (a , b, n) =>{
    for(var i = 0; i < n;i++ ){
            if(i % a ==0 || i % b ==0 ){
                sum += i;
            }
        }
        console.log(sum);
}

 alert("By using function "+ myFunction(3, 5, 10));

//  3. Allow the user to enter the parameters via text box(es)
// and alert them to the output

