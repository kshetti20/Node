let express = require('express')
let categoryRouter = express()

function router(menu) {
   categoryRouter.route('/')
        .get(async (req,res) => {
      res.send("This is the Category route")
    })

    return categoryRouter;
}

module.exports = router