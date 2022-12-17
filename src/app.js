const path = require('path')
const express = require('express');
// express is just a function
// call it to create a new express application

// console.log(__dirname) // C:\Users\pangx\Desktop\NodeTutorial\web-server\src
// // console.log(__filename) // C:\Users\pangx\Desktop\NodeTutorial\web-server\src\app.js
// console.log(path.join(__dirname, '../public'))

const app = express()

// configure exoress to serve the directory up


app.use(express.static(path.join(__dirname, '../public')))
// app.use() is a way to customize your server
// express.static(), we pass its return value into app.use()
// static() take the path to the folder we wanna serve up
app.set('view engine', 'hbs')
// set() allows to set a value for a given express setting 
// 'key', 'value'

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather APP",
        name: "Blaire P"
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Blaire P"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "This is the helpful text",
        title: "Help",
        name: "Blaire P"

    })
})



// app.get('', (req, res) => { // incoming request to the server, response: contains a bunch of methods allowing us to customize what we are going to send back to the requester z
//     // look at req to figure out what we wanna do
//     // like read data from database, create HTML

//     // use various methods on res to send a response back
//     res.send('<h1>Weather</h1>') // this allow us to send something back to the requester
//     // display on browser
// })
// // this let us configure what the server should do when someone try to get the resource at a specific URL
// // takes two argument
// // first is the route(the partial URL)
// // second is a function to describe what we wanna do when someone visit that particular route



// // app.use(express.static(path.join(__dirname, '../public/help')))
// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Blaire',
//         age: 21
//     }, {
//         name: 'Sara',
//     }])
// })



// // app.use(express.static(path.join(__dirname, '../public/about')))
// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Ann Arbor'
    })
})

// in reality, either send back HTML designed to be rendered in the browser,
// or send back JSON object designed to be used by code



// app.com  // root url

// app.com/help
// app.com/about



// start the server up

app.listen(3000, () => {
    console.log('Server is up on port 3000') // not display on browser
}) // only ever used a single time
// the callback function will just run when the server is up and running
// asyncrounous process




// web server never stop unless we stop it
// its job is to stay up and running, listening and processing new incoming requests






