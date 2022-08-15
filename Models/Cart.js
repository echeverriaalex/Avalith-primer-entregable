function getCarts(){
    return fetch('https://fakestoreapi.com/carts')
        .then(res=>res.json());
}

function getCartById(id){
    //https://fakestoreapi.com/cart?userId=1
    return fetch('https://fakestoreapi.com/cart?userId='+id)
        .then(res=>res.json());
}

let Cart = {
    getCarts,
    getCartById
}

module.exports = Cart;