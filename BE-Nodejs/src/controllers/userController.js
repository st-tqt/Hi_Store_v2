const { createUserService } = require("../services/userService");

const createUser = async (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    const data = await createUserService(firstName, lastName, email, phone, password);
    return res.status(200).json(data);

}

module.exports = {
    createUser,
}