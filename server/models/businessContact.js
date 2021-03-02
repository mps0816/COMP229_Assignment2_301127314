/*File name : businessContact.js
  Author's name : Noushig Chitjian
  Student ID : 301117936
  Web site name : NC
  date : Oct 22, 2020 */

let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
    
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contacts', contactModel);