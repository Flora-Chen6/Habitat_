import { db } from "../db.js"
// // import { sfdb } from "../sfdb.js"
// import bcrypt from "bcryptjs"
// // import jwt from "jsonwebtoken"

export const register = (req, res) => {
     //CHECK EXISTING USER in MySQL
    const q = "SELECT * FROM Login.login WHERE email = ? ;";
    //CHECK EXISTING USER in Salesforce
    const q2 = "SELECT Email FROM User WHERE Email LIKE ? ;";

    // sfdb.query(q2, [req.body.email], (err, data) => {
    //     // if (err) return res.status(500).json(err);
    //     if (! data.length) return res.status(409).json("Not Verified User of Atlanta Habitat for Humanity!");
    // }),
    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");
        // if (err){
        //     console.log(err)
        // } else {
        //     console.log("User ID: "+ data.id)
        //     console.log("email: " + data.email)
        // }
        // HASH PASSWORD

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO login(`email`,`firstName`,`lastName`,`password`) VALUES (?)";
        const values = [req.body.email, req.body.firstName,req.body.lastName, hash];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            console.log("adding user to mysql")
            return res.status(200).json("User has been created.");
        });
    });

};

export const login = (req, res) => {
    const q = "SELECT * FROM login WHERE email = ?";
    db.query(q,[req,body,email],(err,data)=>{
        if(err) return res.json(err);
        if (data.length === 0) return res.status(404).json("user not found!");
    })
    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");
};

export const logout = (req, res) => {

};

export const home = (req, res) => {
    console.log(req);
};