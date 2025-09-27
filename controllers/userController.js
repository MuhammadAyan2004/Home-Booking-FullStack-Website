const homeSchema = require("../model/homes")

exports.getRegistration = (req,res)=>{
    res.render('user/addHome',{
        pageTitle: "Homies",
        activePage: "index"
    })
}

exports.addedHome = async (req,res)=>{
    const home =  await homeSchema.find()
    res.render('user/homeadded',{
        booking:home,
        pageTitle: "Homies",
        activePage: "index"
    })
}
exports.postRegistration = (req,res)=>{
    console.log(req.body);
    const {userName,location,price,rating,pic,description} = req.body
    const home = homeSchema({houseName:userName,location,price,rating,pic,description})
    home.save()
    res.render('user/registerhome',{
        pageTitle: "Homies",
        activePage: "index"
    })
}