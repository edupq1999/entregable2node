const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    const data = userControllers.allUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = userControllers.userById(id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
}

const postNewUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    if (first_name && last_name && email && password && birthday) {
        const data = userControllers.createUser({first_name, last_name, email, password, birthday})
        res.status(201).json(data)
    } else {
        res.status(400).json({
            message: 'Invalid Data',
            fields: {
                first_name: 'string *',
                last_name: 'string *',
                email: 'string *',
                password: 'string *',
                birthday: 'YYYY/MM/DD *'
            }})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}