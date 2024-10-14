let basketCost = (basket, price) => {

    let total = 0;
    for(let product in basket){
        total += basket[product]*price[product];
    }

    return total;
}
alert(basketCost({ "banana": 2, "bread": 4, "milk": 1 }, { "banana": 1.5, "bread": 2.99, "milk": 3.50, }))