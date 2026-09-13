// like import java.util.Scanner;
const express = require('express');

// like Scanner sc = new Scanner(System.in); -> (object initialization)
const app = express();

// middleware - used to parse incoming request body in JSON format
app.use(express.json());
app.use(express.static('public'));  // to serve static files from public folder

// database
let users = [
    {
        id: 1,
        username: "ranadeb",
        password: "1234",
        age: 24
    },
    {
        id: 2,
        username: "rahul",
        password: "abcd",
        age: 25
    },
    {
        id: 3,
        username: "admin",
        password: "admin123",
        age: 30
    }
];

/*
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Home page' 
    });
});

app.get('/about', (req, res) => {
    res.status(200).json({
        message: 'About page'
    });
});

app.get('/contact', (req, res) => {
    res.status(200).json({
        message: 'Contact page'
    });
});

app.get('/users', (req, res) => {
    res.status(200).json({
        message: 'Get all users',
        data: users
    });
});

app.post('/users', (req, res) => {
    res.status(201).json({
        message: 'Create user'
    });
});

app.put('/users', (req, res) => {
    res.status(200).json({
        message: 'Update user'
    });
});

app.patch('/users', (req, res) => {
    res.status(200).json({
        message: 'Partially update user'
    });
});

app.delete('/users', (req, res) => {
    res.status(200).json({
        message: 'Delete user'
    });
});
*/

// get user by id
app.get('/users/:id', (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: 'User id is required'
            });
        }
    
        const user = users.find(u => u.id === parseInt(id));
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        return res.status(200).json({
            message: 'User found',
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// create a new user
app.post('/users', (req, res) => {
    try {
        const { username, password, age } = req.body;

        if (!username || !password || !age) {
            return res.status(400).json({
                message: 'Provide all details'
            });
        }

        const newUser = {
            id: users.length + 1,
            username: username,
            password: password,
            age: age
        };

        users.push(newUser);

        return res.status(201).json({
            message: 'New user created',
            data: newUser
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on 3000 port.');
});