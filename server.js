// like import java.util.Scanner;
const express = require('express');

// like Scanner sc = new Scanner(System.in); -> (object initialization)
const app = express();

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
        message: 'Get user'
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

app.listen(3000, () => {
    console.log('Server is running on 3000 port.');
});