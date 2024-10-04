// a

var sum = 0;

let myFunc = ( a, b, l) =>{
    l.forEach(element => {
        if(a % element ==0 || b% element == 0){
            sum += element;
        }
    });
}

alert(myFunc(3,5,10));