const mongoose = require('mongoose') ;
const personSchema = new mongoose.Schema({
        name : {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 50
        },
        age : {
        type : Number,
        required: true
        },
        favoriteFoods:{
            type:[String]
        },
        phone : {
            type : Number,
            required: true
        }    
    }
)
module.exports = mongoose.model(Person , personSchema) ;