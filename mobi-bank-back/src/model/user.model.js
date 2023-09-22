const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_name: {String, required: true},
    user_nasc_date: {String, required: true},
    user_cpf: {String, required: true},
    user_email: {String, required: true},
    user_cellphone: {String, required: true},
    user_role: {String, required: true}
})

module.exports = mongoose.model('User', userSchema);