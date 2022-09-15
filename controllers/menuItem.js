const MenuItem = require ('../models/MenuItem');

exports.createMenuItem = async ( req,res ) => {
  
  // const [category_name, sub_cat, description, price] = req.body;
  try{
    const menuObject = await MenuItem.create({
      category_name: req.body.body.text.category_name,
      sub_cat: req.body.body.text.sub_cat,
      description: req.body.body.text.description,
      price: req.body.body.text.price
      
    })
    console.log(menuObject)
    res.status(200).json({ success: true })
  } catch(err) {
    console.log(err)
    res.status(500).json({success: false, error:'error registering item'})
  }
}

exports.showMenuItem = async (req, res) => {
  try{
    const menu = await MenuItem.find({})
    res.status(200).json({
      message: 'well done DUDE!', 
      menu: menu
    })
  } catch (error){
    console.log('error while trying to get the Menu', error)
  }
}