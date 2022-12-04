import express from "express";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/calendar.js"

// import userRoutes from "./routes/users.js";
// import homeRoutes from "./routes/home.js"; 
// const cors = require('cors');


const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/calendar", eventRoutes);



// app.use("/api/users", userRoutes);
// app.use("/api/home", homeRoutes);


app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


app.listen(process.env.PORT || 5000, () => {
    console.log("Connected to 7000!");
});