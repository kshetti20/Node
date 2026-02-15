let express = require("express");
let {dbConnect} = require('../FullStack/src/controller/dbController')
let app = express();
let port = 9801;

let menu = [ {link:'/category',name:'Category'} ]

let categoryRouter = require('./src/controller/CategoryRouter')(menu)

app.use(express.static(__dirname+'/public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index', {title: 'Home page'})
})

app.use('/category', categoryRouter)

app.listen(port, (err) => {
    dbConnect()
    if(err) throw err;
    console.log("Server is running on port "+ port)
})