const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name:String

});
const player = mongoose.model('Player' , playerSchema);
module.exports = player;