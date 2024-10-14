let basketCost = (basket, price) => {

    let total = 0;
    for (let product in basket) {
        total += basket[product] * price[product];
    }

    return total;
}

function calculate () {
    let basket = {
        "banana": parseInt(document.getElementById("product1").value), 
        "bread": parseInt(document.getElementById("product2").value), 
        "milk": parseInt(document.getElementById("product3").value),
    }
    
    let price = {
        "banana": 1.5, "bread": 2.99, "milk": 3.50,
    }
    
    let totalCost = basketCost(basket, price);
    document.getElementById("basketTotal").innerHTML = `Total Cost of basket is: ${totalCost}`;
    
}
