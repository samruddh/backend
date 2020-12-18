var mongoose = require("mongoose");


var gotschema = new mongoose.Schema(

    {
        name: {
            type: String,
        },
        
        
        location: {
            type: String,
        }

    }
)

module.exports = mongoose.model("Got", gotschema);