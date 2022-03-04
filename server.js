let express=require('express')
let app=express()
let connectDB=require ('./config/connectBD')

connectDB()
let PORT=process.env.PORT||8888
app.use(express.json())

app.listen(PORT,(err)=>
err?console.log(err):console.log("server is started"))
