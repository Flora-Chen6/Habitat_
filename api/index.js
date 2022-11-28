import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
// const cors = require('cors');
// const connection = require("./db");
// import mongodb from "./db.js";


const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Connected to 8800!");
});