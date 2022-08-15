const carts = require('../Models/Cart');
const users = require('../Models/User');
//const UserController = require('../Controllers/UserController');

let getCarts = async(req, res)=>{
    let cartList = await carts.getCarts();
    res.status(200).send(cartList);
};

let getBigCarts = async(req, res) =>{

    let usersList = await users.getUsers();

    let cartList = await carts.getCarts();
    let bigCartsList = cartList
        .filter(cart => cart.products.length > 2)
        .map(cart => (
            
            u = usersList.find(user => user.username),
            {
                user: `${u.username} ${u.name.firstname} ${u.name.lastname}`,
                //user0: u1['username'],
                //user1: usersList.filter(user => user.id == cart.userId).map(user => user.username),
                //user2: usersList.filter(user => user.id == cart.userId),
                //user: users.getUserById(cart.userId),
                /*
                user:                                 
                    usersList.filter(user => {
                    if(user.id == cart.userId){
                            u =  users.getUserById(cart.userId);
                            console.log(`User : ${u}`);
                            return u;
                    }
                })
                */
                cart
            }));

        u = usersList.filter(user => user.id == 1);
        console.log(u[0]);
                                
    res.status(200).send(bigCartsList);
}

let cartController = {
    getCarts,
    getBigCarts
};

module.exports = cartController;