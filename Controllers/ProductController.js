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

let getProductsCategories = async(req, res) => {

    let productsList = await products.getProducts();
    let categoriesList = await products.getCategories();

    let CategoriesAndProdducts = categoriesList
        .map(category => ({
            category: category,
            productsList: productsList.filter(product => product.category == category)
        }));
    res.status(200).send(CategoriesAndProdducts);
}

let getProductsPrices = async(req, res)=>{
    let productsList = await products.getProducts();
    let order = req.query.order;

    let prices = productsList.map(product => ({
        id: product.id,
        title: product.title,    
        price: product.price
    }));

    order =='asc'? prices.sort((a,b) => a.price - b.price)
              : prices.sort((a,b) => b.price - a.price);
    res.status(200).send(prices);
};

let getCategories = async(req, res)=>{
    let categoriesList = await products.getCategories();
    res.status(200).send(categoriesList);
};

let getExpensiveOfCategories = async(req, res)=>{

    let productsList = await products.getProducts();
    let categoriesList = await products.getCategories();

    let CategoriesAndProdducts = categoriesList
        .map(category => ({
            category: category,
            productsList: productsList.filter(product => product.category == category)
        }));

        /*
        let expensives = CategoriesAndProdducts
            .map(categoryList => ({ 
                //categoryList.productsList.map()
            }));
        */

        // creo un array donde voy a guardar el productos 
        //  mas caro de cada categoria
        let expensives = [];

        // empioezo a recorrer las categorias y las llamo element
        CategoriesAndProdducts.forEach(element => {            
            // asigno un falso mayor en cada lista
            let expensive = element.productsList[0];
            //console.log(`El expensive es \n ${expensive.category}  ${expensive.price}`);
            // recorro la lista
            element.productsList.forEach(p => {

                // a cada elemento de la lista lo comparo con el falso mayor
                if(expensive.price < p.price){

                    // si se encuntra un mayor mas caro que 
                    //el falso mayor lo pongo como falso mayor de la lista 
                    expensive = p;
                    //console.log(`El nuevo expensive es: \n ${p.category}  ${p.price}`)
                }
            })
            // cuando termine de recorrer la lista y ya tengo 
            //el mas caro de la lista lo guardo en un array de caros
            expensives.push(expensive);
        });
    res.status(200).send(expensives);
}

const productController = {
    
    getProducts,
    getProductById,
    getProductsByCategory,
    getProductsCategories,
    getProductsPrices,
    getCategories,
    getExpensiveOfCategories
};

module.exports = productController;