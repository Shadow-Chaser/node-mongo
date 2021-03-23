const express = require("express")
const app = express()
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
    const userId = req.params.id;
    const name = users[userId];
    console.log(req.query.sort);
    res.send(name);
})


app.listen(3000, () => console.log("listening to 3000"))