exports.getIndex = (req,res)=>{
    res.render('index',{
        pageTitle: "Homies",
        activePage: "index"
    })
}
exports.getHomes = (req,res)=>{
    res.render('store/homes',{
        pageTitle: "Homes",
        activePage: "homeList"
    })
}
exports.getFav = (req,res)=>{
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