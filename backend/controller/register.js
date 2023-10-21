const Register = require("../models").register;

exports.register = async (req, res) => {
    try {
        const register = await Register.create(req.body);
        return res.status(201).json({ success: true, data: register });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};
