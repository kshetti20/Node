let express = require("express");
let app = express();
let port = 9801;

app.use(express.static(__dirname+'/public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index', {title: 'Fullstack project'})
})

app.listen(port, (err) => {
    if(err) throw err;
    console.log("Server is running on port "+ port)
})