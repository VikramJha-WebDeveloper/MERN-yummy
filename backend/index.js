require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());

const port = process.env.PORT;
const database_url = process.env.DATABASE_URI;
const secret_key = process.env.SECRET_KEY;

const connectToDatabase = async()=>{
    try{
        await mongoose.connect(database_url);
        console.log(`Successfully connected to the database`);
    }catch(err){
        console.log("error connecting to the database",err);
    };
};
connectToDatabase();

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    confirmPassword: String,
});
const UserModel = mongoose.model("User", userSchema);

app.post("/register", async(req, res)=>{
    const {fullName, email, password, confirmPassword} = req.body;

    if(!fullName || !email || !password || !confirmPassword){
        console.log("All fields are required");
        return res.status(400).json({errorMessage: "All fields are required"});
    };

    if(password !== confirmPassword){
        console.log("Password do not match");
        return res.status(400).json({errorMessage: "Password do not match"});
    };

    try{
        const existedUser = await UserModel.findOne({email});
        if(existedUser){
            console.log("This user is already exists");
            return res.status(400).json({errorMessage: "This user is already existed"});
        };

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({fullName, email, password: hashPassword});
        await newUser.save();
        console.log("User successfully registered");
        res.status(200).json({message: "User successfully registered"});
    }catch(err){
        console.log(err);
    }
});

app.post("/login", async(req, res)=>{
    const {email, password, isRemembered} = req.body;

    if(!email || !password || !isRemembered){
        console.log("All fields are required");
        return res.status(400).json({errorMessage: "All fields are required"});
    };

    try{
        const foundUser = await UserModel.findOne({email});
        if(!foundUser){
            console.log("No user found");
            return res.status(400).json({errorMessage: "No user found"});
        };
        
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if(!isMatch){
            console.log("Invalid credentials");
            return res.status(400).json({errorMessage: "Invalid credentials"});
        };

        const token = jwt.sign({user_id: foundUser._id}, secret_key, {expiresIn: "1h"});
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env._NODE_ENV === "production",
            maxAge: 3600000,
            sameSite: "strict",
        });
        console.log("Login successful");
        return res.status(200).json({message: "Login successful"});
    }catch(err){
        console.log(err);
    }
});

const verifyToken = async(req, res, next)=>{
    const token = req.cookies.token;

    if(!token){
        console.log("No token provided");
        return res.status(400).json({errorMessage: "No token provided"});
    };

    try{
        const decode = jwt.verify(token, secret_key);
        req.user = decode;
        next();
    }catch(err){
        console.log(err);
    }
}

app.get("/me", verifyToken, async(req, res)=>{
    try{
        const foundUserForVarification = await UserModel.findById(req.user.user_id);
    if(foundUserForVarification){
        return res.status(200).json({message: "Verification success", user: {fullName: foundUserForVarification.fullName, email: foundUserForVarification.email}});
    }else{
        console.log({errorMessage: "Verification failed"});
        return res.status(400).json({errorMessage: "Varification failed"});
    };
    }catch(err){
        console.log(err);
    }
    
});

app.get("/logout", verifyToken, async(req, res)=>{
    try{
        res.clearCookie("token");
    res.status(200).json({message: "Logout successfully"});
    }catch(err){
        console.log(err);
    }
})

app.listen(port, ()=>{
    console.log(`Server is runnihng on port ${port}`);
});