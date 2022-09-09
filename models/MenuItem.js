
const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  
  
    category_name: String,
    sub_cat: String,
    description: String,
    price: Number
    
    
}, {
  timestamps: true
})
const MenuItem = mongoose.model("Menu item", MenuItemSchema);
module.exports = MenuItem;