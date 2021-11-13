const mongoose = require('mongoose');
const User = require('../data/users.model');

module.exports.getAll = async (req, res)=>{
    const names = await User.find().exec();
    res.json(names);
}
