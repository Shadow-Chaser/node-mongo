const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json());

const  users = ['Maliha', 'Mahin', 'Moin', 'Asad', 'Galib']

app.get('/', (req, res)=>{
    const fruit = {
        name:'Mango',
        price:110
    }
    res.send(fruit)
})

app.get('/fruits/banana', (req, res)=>{
    const fruit = {
        name:'Banana',
        price:120
    }
    res.send(fruit)
})

app.get('/user/:id', (req, res)=>{
    const id = req.params.id;    
    const name = users[id];
    res.send({id, name});
    console.log(req.query.sort);
})

//post

app.post('/addUser', (req, res)=>{
    // console.log('data received',req.body);

    //save to database
    
    const user = req.body;
    user.id = 15;
    res.send(user);
})

app.listen(3000, () => console.log("listening to 3000"))