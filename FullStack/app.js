let express = require("express");
let app = express();
let port = 9801;

app.get('/', (req,res) => {
    res.send("Hii From Fullstack project")
})

app.listen(port, (err) => {
    if(err) throw err;
    console.log("Server is running on port "+ port)
})