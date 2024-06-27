

const mongoose = require('mongoose');

const feesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
    semester: { type: String, required: true },
    amountDue: { type: Number, required: true },
    amountPaid: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now }
});

const feesModel = mongoose.model('Fees', feesSchema);

module.exports = {feesModel};