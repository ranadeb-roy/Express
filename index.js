// like import java.util.Scanner;
const express = require('express');

// like Scanner sc = new Scanner(System.in); -> (object initialization)
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Welcome to Express JS' 
    });
});

app.listen(3000, () => {
    console.log('Server is running on 3000 port.');
});