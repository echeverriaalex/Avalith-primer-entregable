function getUsers(){
    return fetch('https://fakestoreapi.com/users')
        .then(res=>res.json());
}

function getUserById(id){
    return fetch('https://fakestoreapi.com/users/'+id)
        .then(res=>res.json());
}

function getUsersLimit(limit){
    return fetch('https://fakestoreapi.com/users?limit='+limit)
            .then(res=>res.json())
}

let User = {
    getUsers,
    getUserById,
    getUsersLimit
}

module.exports = User;