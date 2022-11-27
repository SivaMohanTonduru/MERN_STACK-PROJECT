const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tripSchema = new Schema({
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    source:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    travellers:{
        type:Number,
        required:true,
    },
    hotelcategory:{
        type:String,
        required:true,
    },
    includeshotel:{
        type:String,
        required:true,
    },
    includeslocalvehicle:{
        type:String,
        required:true,
    }
},
    {
        collection : 'trip'
    });

module.exports = mongoose.model('trip',tripSchema);
