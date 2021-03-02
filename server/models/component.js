/*File name : component.js
  Author's name : Noushig Chitjian
  Student ID : 301117936
  Web site name : NC
  date : Oct 22, 2020 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let ComponentSchema = new Schema({
    partID: String,
    name: String,
    description: String,
    price: Number
},
{
    collection: 'components'
});

module.exports.Model = Model('Component', ComponentSchema);