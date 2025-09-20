exports.getRegistration = (req,res)=>{
    res.render('user/addHome',{
        pageTitle: "Homies",
        activePage: "index"
    })
}

exports.addedHome = (req,res)=>{
    res.render('user/homeadded',{
        pageTitle: "Homies",
        activePage: "index"
    })
}