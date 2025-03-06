const User = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUserService = async (firstName, lastName, email, phone, password) => {
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);

        let result = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: hashPassword,
        })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}





module.exports = {
    createUserService
}