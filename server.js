const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('form');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/submit', (req, res) => {
    const { password } = req.body;
 
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (!strongPassword.test(password)) {
        return res.status(400).send('Password must include uppercase, lowercase, a number, and a special character.');
    }

    res.send('Form submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
