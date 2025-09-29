const homeSchema = require("../model/homes")

exports.getIndex = (req,res)=>{
    res.render('index',{
        pageTitle: "Homies",
        activePage: "index"
    })
}
exports.getHomes = async (req,res)=>{
    const homes = await homeSchema.find()
    res.render('store/homes',{
        pageTitle: "Homes",
        activePage: "homeList",
        home:homes,
    })
}
exports.getdetails = async (req,res)=>{
    const homeId = req.params.homeId; 
    const home = await homeSchema.findById(homeId)
    res.render('store/homeDetails',{
        pageTitle: "Home detail",
        activePage: "homeList",
        home:home,
    })
}
exports.getFav = (req,res)=>{
    res.render('store/fav',{
        pageTitle: "Favorite home",
        activePage: "favorite"
    })
}
exports.postaddFav = (req,res)=>{
    res.render('store/fav',{
        pageTitle: "Favorite home",
        activePage: "favorite"
    })
}
exports.getBook = (req,res)=>{
    res.render('store/book',{
        pageTitle: "Booking",
        activePage: "booking"
    })
}