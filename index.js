const express = require('express'); // Importing the express module
const path = require('path'); // Importing the path module
const users = require('./mock.json'); // Importing the users module
const app = express();// Creating an instance of the express application
const fs = require('fs'); // Importing the fs module for file system operations
const PORT = 8080;


app.use(express.urlencoded({ extended: false })); // Using the express.urlencoded middleware to parse the request body


app.get("/users",(req,res)=>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>`
    res.send(html)
})

app.get('/api/users', (req, res) => {

    return res.json(users); // Sending the users as the response
});

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id); // Parsing the 'id' parameter to a number
    const user = users.find((user) => user.id === id); // Finding the user with the specified 'id'
    if (!user) {
        return res.status(404).json({ error: 'User not found' }); // Sending an error response if the user was not found
    }
    return res.json(user); // Sending the user as the response
});
app.get('/api/users/byName/:name', (req, res) => {
    const name = req.params.name; // Extracting the 'name' parameter from the URL
    const user = users.find((user) => user.first_name === name); // Finding the user with the specified 'first_name'

    if (!user) {
        return res.status(404).json({ error: 'User not found' }); // Sending an error response if the user was not found
    }

    return res.json(user); // Sending the user as the response    
});

app.post('/api/users', (req, res) => {
    const body = req.body; // Extracting the request body
    users.push({...body, id: users.length + 1}); // Adding the new user to the users array
    fs.writeFile('./mock.json', JSON.stringify(users), (err,data) =>{
        return res.json({status: "Success", id: users.length}); // Sending the new user as the response
    } ); // Writing the updated users array to the file

});

app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id); // Parsing the 'id' parameter to a number
    const userIndex = users.findIndex((user) => user.id === id); // Finding the index of the user with the specified 'id'
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' }); // Sending an error response if the user was not found
    }
    users.splice(userIndex, 1); // Removing the user from the users array
    fs.writeFile('./mock.json', JSON.stringify(users), (err,data) =>{
        return res.json({status: "Success"}); // Sending a success response
    } ); // Writing the updated users array to the file
});

app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id); // Parsing the 'id' parameter to a number
    const userIndex = users.findIndex((user) => user.id === id); // Finding the index of the user with the specified 'id'
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' }); // Sending an error response if the user was not found
    }
    const body = req.body; // Extracting the request body
    users[userIndex] = {...users[userIndex], ...body}; // Updating the user with the new data
    fs.writeFile('./mock.json', JSON.stringify(users), (err,data) =>{
        return res.json({status: "Success"}); // Sending a success response
    } ); // Writing the updated users array to the file
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Logging a message when the server starts listening 