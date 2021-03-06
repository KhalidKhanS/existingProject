const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, "routes/blog.js")))


app.listen(port, ()=>{
    console.log(`Blog app listening to port : http://localhost:${port}`)
})
