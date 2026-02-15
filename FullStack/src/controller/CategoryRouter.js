let express = require('express')
let categoryRouter = express()
let {getData} = require('./dbController')

function router(menu) {
   categoryRouter.route('/')
        .get(async (req,res) => {
        let query = {};
        let data = await getData('category',query)
        console.log("data===", data)
    })

    return categoryRouter;
}

module.exports = router