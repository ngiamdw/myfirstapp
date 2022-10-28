//import packages
const express = require('express')
const morgan = require('morgan')

//configure out port
//check if it is set in the evnironment variable, if not then we default to 3000
const port = process.env.PORT || 3000

//create an instance of express application
const app = express()

//log all request
app.use(morgan('common'))

//get
app.get('/',(req,resp) => {
    //return html content
    resp.type('text/html')
    //set the status code
    resp.status(200)
    //send response
    resp.send(`<h1>The time is now  ${new Date()} </h1>`)
    
})

//start our web application
app.listen(port,() =>{
    console.info(`Starting application on port ${port} at ${new Date()}`)
})
//console.info(`port = ${port}`)
