const products = require('../Models/Product');

let getProducts = async(req, res)=>{
    let productsList = await products.getProducts();
    res.status(200).send(productsList);
};

let getProductById = async(req, res)=>{
    //console.log(req.params.id);
    let productsList = await products.getProducts();
    let quantity = productsList.length;
    //console.log(quantity);

    if(req.params.id <= quantity){
        let product = await products.getProductById(req.params.id);
        res.status(200).send(product);
    }
    else{
        console.log("ID not exist");
        res.status(200).send("the id of the searched product does not exist");
    }
};

let getProductsByCategory = async(req, res) => {

    let category = req.params.category;
    //console.log(category);
    //let productsList = await products.getProductsByCategory(req.params.id);

    let productslist = await products.getProducts();

    let productsCategory = productslist.filter(product => product.category === category)
                                .map(product => product);

    res.status(200).send(productsCategory);
}


let getProductsPrices = async(req, res)=>{
    let productsList = await products.getProducts();
    let order = req.query.order;

    let prices = productsList.map(product => ({
        id: product.id,
        title: product.title,    
        price: product.price
    }));

    order = 'asc'? prices.sort((a,b) => a.price - b.price) : prices.sort((a,b) => b.price - a.price);
    res.status(200).send(prices);
};

let getCategories = async(req, res)=>{
    let categoriesList = await products.getCategories();
    res.status(200).send(categoriesList);
};

const productController = {
    
    getProducts,
    getProductById,
    getProductsByCategory,
    getProductsPrices,
    getCategories
};

module.exports = productController;