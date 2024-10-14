// a

// var sum = 0;

// let myFunc = ( a, b, l) =>{
//     l.forEach(element => {
//         if( element % a ==0 ||element % b == 0){
//             sum += element;
//         }
//     });
//     return sum;
// }

// alert(myFunc(3,5,[0,1,2,3,4,5,6,7,8,9]));

//-------------- Exercise b -----------------------

// var sum = 0;

// let myFunc = ( arr, l) =>{
//     l.forEach(element => {
//        if(element % arr[0] == 0 || element % arr[1] ){
//         sum += element;
//        }
//     });
//     return sum;
// }

// alert(myFunc([3,5],[0,1,2,3,4,5]));

// -------------- Exerciese c --------------------------

var sum = 0;

let myFunc = ( arr, l) =>{
    l.forEach(element => {
       arr.forEach(e => {
        if(element % e == 0){
            sum += element;
        }
       });
    });
    return sum;
}

alert(myFunc([3,5,9],[0,1,2,3,4,5]));