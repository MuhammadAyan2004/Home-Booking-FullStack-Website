const { check, validationResult } = require("express-validator")
const signUp = require("../model/signModel")
const bcrypt = require("bcrypt")

exports.getLogin = (req,res)=>{
    res.render('auth/login',{
        pageTitle: "login",
        activePage: 'login',
        isLoggedIn:false
    })
}
exports.postLogin = (req,res)=>{
    res.render('index',{
        pageTitle: "homies",
        activePage: 'index',
        isLoggedIn:true
    })
    // res.redirect('/')
}
exports.getSignUp = (req,res)=>{
    res.render('auth/signup',{
        pageTitle: "login",
        activePage: 'signup',
        isLoggedIn:false,
    })
}
exports.postSignUp = [
    // First name validation
    check('FirstName')
        .trim()
        .isLength({ min: 2 })
        .withMessage('First name should be at least 2 characters long')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage("First name should contain only alphabets"),

    // Last name validation
    check('lastName')
        .trim()
        .isLength({ min: 2 })
        .withMessage("Last name should be at least 2 characters long")
        .matches(/^[A-Za-z\s]+$/)
        .withMessage("Last name should contain only alphabets"),

    // Email validation
    check('Email') // fixed typo: was 'Emial'
        .isEmail()
        .withMessage("Please enter a valid email")
        .normalizeEmail(),

    // Password validation
    check('password')
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter")
        .matches(/[a-z]/)
        .withMessage("Password must contain at least one lowercase letter")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number")
        .matches(/[!@#$%^&*()\-_=+{};:,<.>]/)
        .withMessage("Password must contain at least one special character")
        .trim(),
    
    check('confirmPassword')
    .trim()
    .custom((value,{req})=>{
        if(value !== req.body.password){
            throw new Error("password not matched")
        }
        return true
    }),
    check('accountType')
    .notEmpty()
    .withMessage('Account type is required')
    .isIn(['host','user'])
    .withMessage('invalid account type'),

    (req,res)=>{
        console.log(req.body);
        const{FirstName,lastName,Email,password,confirmPassword,accountType,authenticate}=req.body
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(404).render('auth/signup',{
            pageTitle: "login",
            activePage: 'signup',
            isLoggedIn:false,
        })
        }

        bcrypt.hash(password,12).then(hashedPassword =>{
            const User = new signUp({
                firstName:FirstName,
                lastName:lastName,
                email:Email,
                password:hashedPassword,
                accType:accountType,
            })
            return User.save()
        }).then(()=>{
            res.redirect('/login')
        }).catch(()=>{
            return res.status(404).render('auth/signup',{
            pageTitle: "login",
            activePage: 'signup',
            isLoggedIn:false,
        })
        })

    }
]