
//MODEL DEFINITION
const mongoose=require('mongoose');

// SCHEMA DEFINITION

const flightSchema= new mongoose.Schema({
    // key value pairs
    airline: {
        type: String,
      //  enum:['American', 'Southwest','United','Jetblue', 'Spirit']
    },

    airport:{
        type: String,
       // enum:['AUS','DEN', 'DFW', 'LAX', 'SAN','JFK', 'LGA'],
       // default:'JFK',
    },
  
    flightNo:{
        type:Number,
        min:10,
        max:9999,
        required:true
    },

    departs:{
        type:Date,
        default: new Date()
    }

})

module.exports = mongoose.model('Flight', flightSchema);