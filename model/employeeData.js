const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    employeeName : String,
    employeeDesignation : String,
    employeeLocation : String,
    Salary : Number

});

const employeeData = mongoose.model('employee',employeeSchema);
module.exports = employeeData;