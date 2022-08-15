const users = require('../Models/User');

let getUsers = async(req, res)=>{
    let usersList = await users.getUsers();
    res.status(200).send(usersList);
};

let getUserById = async(req, res)=>{
    //console.log(req.params.id);
    let usersList = await users.getUsers();
    let quantity = usersList.length;
    //console.log(quantity);

    if(req.params.id <= quantity){
        let user = await users.getUserById(req.params.id);
        res.status(200).send(user);
    }
    else{
        console.log("ID not exist");
        res.status(200).send("the id of the searched user does not exist");
    }
};

let getUsersFirst = async(req, res)=>{
    let limit = 3;
    let usersList = await users.getUsersLimit(limit);
    usersList.sort((a,b) => a.id - b.id);
    res.status(200).send(usersList);
};

let getUsersLimit = async(req, res)=>{
    let limit = req.params.limit
    let usersList = await users.getUsersLimit(limit);
    res.status(200).send(usersList);
};

let UserController = {
    getUsers,
    getUserById,
    getUsersFirst,
    getUsersLimit
};

module.exports = UserController;