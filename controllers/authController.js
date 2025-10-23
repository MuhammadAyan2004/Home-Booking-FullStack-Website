exports.getLogin = (req,res)=>{
    res.render('auth/login',{
        pageTitle: "login",
        activePage: 'login'
    })
}
exports.postLogin = (req,res)=>{
    res.redirect('/')
}
exports.getSignUp = (req,res)=>{
    res.render('auth/signup',{
        pageTitle: "login",
        activePage: 'signup'
    })
}