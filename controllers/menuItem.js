const MenuItem = require ('../models/MenuItem');

exports.createMenuItem = async ( req,res ) => {
  console.log(req.body.body.text)
  try{
    const menuObject = await MenuItem.create({
      itemName: req.body.body.text,
      
    })
    console.log(menuObject)
    res.status(200).json({ success: true })
  } catch(err) {
    console.log(err)
    res.status(500).json({success: false, error:'error registering item'})
  }
}