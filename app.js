const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine','ejs')
app.set('views','views')

const users = []
app.get('/',(req,res,next) => {
    res.render('index',{pageTitle:"Add User"})
})

//Ensure we can get the information parsed onto our view
app.use(bodyParser({extended:false}))

app.get('/users',(req,res,next)=>{
    res.render('users',{pageTitle:'User',users:users})
})  

app.post('/add-user', (req,res,next) => {
    users.push({name:req.body.username})
    res.redirect('/users')
})

app.listen(9000)

