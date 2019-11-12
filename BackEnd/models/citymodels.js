const mongoose =require('mongoose')
const citySchema = new mongoose.Schema({
    ciudad:{type:String, required:true},
    pais:{type:String, require:true}
})

const City = mongoose.model('city',citySchema)

module.exports = City