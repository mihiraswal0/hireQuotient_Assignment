const express=require('express');
const dotenv=require('dotenv');
const bodyParser=require('body-parser');
const authRoutes=require("./routes/auth.js");
const postRoutes=require('./routes/post.js');
const profileRoutes=require('./routes/profile.js');
const errorHandler=require('./middleware/error.js');
const notFound=require('./middleware/notFound.js');
const app=express();
dotenv.config();

require('./database/db.js');


app.use("/",(req,res)=>{
    res.send("Api Running")
})
app.use('/api/auth',authRoutes);
app.use('/api/profile',profileRoutes);
app.use('/api/posts',postRoutes);
// app.use(notFound);
// app.use((err),errorHandler);


app.listen(process.env.PORT,()=>{
    console.log("Listening on port: "+process.env.PORT);
})