const usersDB = []
let id = 1
/*
{
	id: 1,
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
}
*/

const allUsers = () => {
    return usersDB
}

const userById = (id) => {
    const user = usersDB.find(userInfo => userInfo.id == id)
    return user
}

const createUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
}
module.exports = {
    allUsers,
    userById,
    createUser
}