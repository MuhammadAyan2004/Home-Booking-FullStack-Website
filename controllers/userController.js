const homeSchema = require("../model/homes")

exports.getRegistration = (req,res)=>{
    res.render('user/addHome',{
        pageTitle: "Homies",
        activePage: "index",
        edithome:false
    })
}

exports.postRegistration = (req,res)=>{
    const {userName,location,price,rating,pic,description} = req.body
    const home = homeSchema({houseName:userName,location,price,rating,pic,description})
    home.save()
    res.render('user/registerhome',{
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

exports.getEdithome = async (req,res)=>{
    console.log(req.params.homeId);
    const homeId = req.params.homeId;
    const editing = req.query.editing === 'true'

    const home = await homeSchema.findById(homeId)
        try {
            res.render('user/addHome',{
                pageTitle: "Edit Home",
                activePage: "index",
                edithome:home,
                editing,
            })   
        } 
        catch(err){
            console.log("could not found your home:", err);
        }
}
exports.postEdithome = async (req,res)=>{
    const {id,userName,location,price,rating,pic,description} = req.body
    const home = await homeSchema.findByIdAndUpdate(id,{houseName:userName,location,price,rating,pic,description},{new:true})
        try {
            res.redirect('/host/homes')   
        } 
        catch(err){
            console.log("could not found your home:", err);
        }
}