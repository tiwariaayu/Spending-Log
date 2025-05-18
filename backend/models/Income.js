const mongoose = require('mongoose');
const { useId } = require('react');
const { data } = require('react-router-dom');


const IncomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    icon: {
        type: String,
    },
    source: {
        type: String,
        required: true
    },//example freelance, salary,etc
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
},{
    timestamps: true
});

module.exports = mongoose.model("Income", IncomeSchema);