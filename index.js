require('dotenv').config();
const express = require('express');
const app = express()

const port = process.env.PORT || 3100;

app.use(express.json());

app.get('/users', (req, res) => {
    const users = [
        {
            id:1,
            name: 'Agus'
        },
        {
            id: 2,
            name: 'Andy'
        }
    ]
    res.status(200).json(users)
});

app.post('/users',(req, res)=>{

    const user = req.body;
    const result = {
        message: 'User created',
        user
    }
    res.status(201).json(result);
});

app.put('/users/:id',(req, res)=>{
    const {id} = req.params;
    const user = req.body;
    user.id = id;
    const result = {
        message: 'User updated'
    }
    res.status(200).json(result);
});
app.patch('/users', (req, res)=>{
    const result = {
        message: 'User updated with patch'
    }
    res.status(200).json(result);
});
app.delete('/users/:id',(req, res)=> {
    const {id} = req.params;
    //const id = req.params.id;
    const result = {
        message: `User with id: ${id} Deleted`
    }
    res.json(result);
});

app.listen(port, () => {
console.log(`==> ==> ==> App started at Port: ${port}`)
});