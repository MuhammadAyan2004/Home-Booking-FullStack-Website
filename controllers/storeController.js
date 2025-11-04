const homeSchema = require("../model/homes")
const fav = require("../model/fav")

exports.getIndex = (req,res)=>{
    res.render('index',{
        pageTitle: "Homies",
        activePage: "index",
        isLoggedIn:false
    })
}
exports.getHomes = async (req,res)=>{
    const homes = await homeSchema.find()
    res.render('store/homes',{
        pageTitle: "Homes",
        activePage: "homeList",
        home:homes,
        isLoggedIn:false
    })
}
exports.getdetails = async (req,res)=>{
    const homeId = req.params.homeId; 
    const home = await homeSchema.findById(homeId)
    res.render('store/homeDetails',{
        pageTitle: "Home detail",
        activePage: "homeList",
        home:home,
        isLoggedIn:false
    })
}
exports.getFav = async (req,res)=>{
    try{
        const favs = await fav.find().populate('_id')
        res.render('store/fav',{
            pageTitle: "Favorite home",
            activePage: "favorite",
            booking:favs,
            isLoggedIn:false
        })
    }
    catch(err){
        console.log(err);
        res.redirect("/favorites")
    }
}

exports.postaddFav = async (req,res)=>{
    try{
        const homeId = req.body.id
        const existingHome = await fav.findById(homeId)
        
        if(existingHome){
            return res.redirect('/favorites')
        }

        const favs = new fav({_id:homeId})
        await favs.save()
        return res.redirect("/favorites")
    }
    catch(err){
        console.log(err);
        res.redirect("/homeList")
    }
}

exports.postDelFav = async (req,res)=>{
    const homeId = req.params.homeId
    await fav.findByIdAndDelete(homeId)
    try{
        res.redirect("/favorites")
    }
    catch(err){
        console.log(err);
        res.redirect("/favorites")
    }
}
exports.getBook = (req,res)=>{
    res.render('store/book',{
        pageTitle: "Booking",
        activePage: "booking",
        isLoggedIn:false
    })
}