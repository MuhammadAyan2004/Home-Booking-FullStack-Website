exports.getLogin = (req,res)=>{
    res.render('auth/login',{
        pageTitle: "login",
        activePage: 'login'
    })
}
exports.getSignUp = (req,res)=>{
    res.render('auth/signup',{
        pageTitle: "login",
        activePage: 'signup'
    })
}