const express = require("express")
const userModel = require("../models/userModel")
const expressasynchandler = require("express-async-handler");
const generateTokens = require("../config/generateTokens");


// login

const logincontroller = expressasynchandler (async (req,res) => {
    const {name,password} = req.body
    const user = userModel.findOne({name})

    console.log("fetch user data",user)
    console.log(await user.matchpassword(password))
    if (user && (await user.matchpassword(password))){
        res.json({
            _id : user._id ,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateTokens(user._id) 
        });
    }
    else{
        res.status(400)
        throw new Error("invalid username and password")
    }
})

// registration

const registercontroller = expressasynchandler (async (req,res) => {

    const {name,email,password} = req.body;
    const existuser = await userModel.findOne({name})
    const existuseremail = await userModel.findOne({email})

    if(!name || !email || !password)
    {
        res.send() 
        throw Error("fill all inputs")
    }
    else if (existuser){
        res.send()
        throw new Error("User already exist")
    }
    else if (existuseremail){
        res.send()
        throw new Error("User already exist with this email")
    }

    // create an entry in the database

    const user  = await userModel.create({name,email,password})
    if (user){
        res.status(201).json({
            _id : user._id ,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateTokens(user._id) 
        });
    }
    else{
        res.status(400)
        throw new Error("Registration Error")
    }
})

module.exports = {registercontroller,logincontroller };