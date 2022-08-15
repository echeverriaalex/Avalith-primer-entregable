const express = require('express');
const router = express.Router();
const dates = require('./Middlewares/Dates');
const error = require('./Middlewares/Error');
const productController = require('./Controllers/ProductController');
const cartController = require('./Controllers/CartController');
const userController = require('./Controllers/UserController');

function getDate(req, res){
    res.send(`It's ${req.hour}:${req.minutes}, 
        ${req.number} ${dates.days[req.today]} of 
        ${dates.months[req.mounth]} ${req.year}`);
}


router.use([dates.myDate, dates.Hour, dates.Minutes, dates.Number, dates.Today, dates.Mounth, dates.Year, dates.displayFullDate]);
router.get('/', getDate);

router.get('/categories', productController.getCategories);
router.get('/products', productController.getProducts);
router.get('/products/categories', productController.getProductsCategories);
router.get('/products/:id', productController.getProductById);
router.get('/products/categories/:category', productController.getProductsByCategory);



router.get('/prices', productController.getProductsPrices);

router.get('/expensive', productController.getExpensiveOfCategories);

router.get('/users', userController.getUsers);
router.get('/users/firsts', userController.getUsersFirst);
router.get('/users/:id', userController.getUserById);

router.get('/carts', cartController.getCarts);
router.get('/bigcarts', cartController.getBigCarts);


router.use(error.notFound);

module.exports = router;