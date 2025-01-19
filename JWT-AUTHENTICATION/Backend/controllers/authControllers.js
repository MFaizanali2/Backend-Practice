import { User } from "../models/authModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import tokenGenerator from "../helper/VerifiedToken.js"

const registerControllers = async(req,res)=>{

    const {email, username, password, role} = req.body
    if(!username || !role || !email || !password){
        return res.status(400).json({message:"All Fields are required"})
    }
    const user = await User.findOne({email})
    if(user){
        return res.status(400).json({message:"Email already exits"})
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        email,
        password: hashPassword,
        role,
        username
    })
    res.status(201).json({message:"User created succesfully", newUser})
}

const loginControllers = async(req,res)=>{

    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({message:"All Fields are required"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"Email not found"})
    }
    const isValidatedPassword = await bcrypt.compare(password, user?.password)
    if(!isValidatedPassword){
        return res.status(400).json({message:"Invalidate Crediential"})
    }

    const token = jwt.sign({id:user?.id}, process.env.JWT_TOKEN)
    console.log(token)

    res.status(400).json({message:"Login succesfully"},token, user)

}

const logoutControllers = (req,res)=>{
    res.status(200).json({message:"Logout succesfully"})
}

const resetPasswordControllers = async(req,res)=>{
    const Token = tokenGenerator();
    console.log(Token)
    res.send("chal raha ha")
}

export {registerControllers, loginControllers, logoutControllers, resetPasswordControllers}