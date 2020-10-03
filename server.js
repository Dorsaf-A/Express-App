const express = require('express')

const app = express()

RequestTime = (req,res,next) => {
    let requestHour = new Date().getHours();
    let requestDay = new Date().getUTCDay();
    if (requestDay <=5 && requestDay >=1 && requestHour >=9 && requestHour <=17) {
        next();
    }else {
        res.sendFile(__dirname + '/public/closed.html')
    }
    }

    app.use(RequestTime,express.static(__dirname + '/public'))

 

const port = 4000
app.listen(port,(err) => {
    err ? console.log(err):console.log(`Server is running on port ${port}`)
})