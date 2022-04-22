let express=require('express')
let app=express()
let connectDB=require ('./config/connectBD')
const user = require('./routers/user')
const passport = require('passport')
const departement = require('./routers/departement')





connectDB()
let PORT=process.env.PORT||8888
app.use(express.json())
app.use('/user', user)
app.use('/departement',departement)
app.listen(PORT,(err)=>
err?console.log(err):console.log("server is started"))


// passport
app.use(passport.initialize())
require('./middleware/passport')(passport)