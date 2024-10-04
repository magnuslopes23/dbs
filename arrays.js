// a

var sum = 0;

let myFunc = ( a, b, l) =>{
    l.forEach(element => {
        if(a % element ==0 || b% element == 0){
            sum += element;
        }
    });
    return sum;
}

alert(myFunc(3,5,[0,1,2,3,4,5,6,7,8,9]));