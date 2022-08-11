function getProducts(){
    return fetch('https://fakestoreapi.com/products')
        .then(res=>res.json());
}

function getProductById(id){
    return fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json());
}

function getProductsByCategory(category){
    //https://fakestoreapi.com/products/category/jewelery
    return fetch('https://fakestoreapi.com/products/category/'+ category)
        .then(res=>res.json())
        .then(json=>console.log(json));
}

function getCategories(){
    return fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json());
}



function getProductLimit(limit){

    //https://fakestoreapi.com/products?limit=5
    return fetch('https://fakestoreapi.com/products?limit=' + limit)
        .then(res=>res.json());
}

let Product = {

    getProducts,
    getProductById,
    getProductsByCategory,
    getCategories,
    getProductLimit
};

module.exports = Product;