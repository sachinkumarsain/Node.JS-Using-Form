import cors from "cors"
import express from "express"
import connection from "./db.js";
import user from "./models.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => { 
    // res.send("hello world")
})
app.post("/login", async (req ,res)=>{
    const{username ,password}=req.body

    const userTryingToLogin =await user.findOne({username})
    if(user){
        if(password===userTryingToLogin.password){
            res.status(200).send("success")

        }
        else{
            res.status(401).send("invalid credentials")
        }

    }
    else{
        res.status(401).send("invalid credentials")
    }
})

app.post("/register", async (req, res) => {
    const { name, email, phone, username, password } = req.body;
    const newUser = new user({
        name,
        email,
        phone,
        username,
        password
    })
    const savedUser = await newUser.save();
    res.status(200).end("well come")

})

connection.then(() => {
    app.listen(8080, () => { console.log("server started at port 8080") })
})
//hfjwfkjbkfb
//kejbfkjdbfhbdshjfbhjdwbfihjdbfhbfsdjhfihr