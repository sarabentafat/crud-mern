//create server
const express=require("express")
const app=express()
const _PORT=process.env.PORT;
const cors=require("cors")
app.use(cors())
app.use(express.json())


//connect to db
const username=process.env.USERNAME
      password=process.env.PASSWORD,
      database=process.env.DB;

const mongoose=require("mongoose")
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.2jnvg6r.mongodb.net/${database}?retryWrites=true&w=majority
`)
//Models//
const UserModel=require('./models/Users')

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.get('/',async(req,res)=>{
    const users=await UserModel.find();
    res.json(users)

})
app.post('/createUser',async(req,res)=>{
    const user=req.body;
    const newUser=new UserModel(user);
    await newUser.save();
    res.json(user)   
    })



app.listen(_PORT,()=>{
    console.log("server is listeningzz")
})