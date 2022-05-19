let express=require('express')
let app=express()
let connectDB=require ('./config/connectBD')
const user = require('./routers/user')
// const passport = require('passport')
const departement = require('./routers/departement')
const Présence = require('./routers/Présence')
const Congé = require('./routers/Congé')





connectDB()
let PORT=process.env.PORT||5000
app.use(express.json())
app.use('/user', user)
app.use('/departement',departement)
app.use('/presence',Présence)
app.use('/conge',Congé)
app.listen(PORT,(err)=>
err?console.log(err):console.log("server is started"))


// passport
// app.use(passport.initialize())
// require('./middleware/passport')(passport)