const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // cross origin resource sharing 

const app = express();

const friends = [
	{
		name: 'Ben',
		age: 30,
		email: 'ben@lambdaschool.com',
	},
	{
		name: 'Austen',
		age: 45,
		email: 'austen@lambdaschool.com',
	},
	{
		name: 'Ryan',
		age: 15,
		email: 'ryan@lambdaschool.com',
	},
	{
		name: 'Sean',
		age: 35,
		email: 'sean@lambdaschool.com',
	},
	{
		name: 'Michelle',
		age: 67,
		email: 'michelle@gmail.com',
	},
];

app.use(bodyParser.json());

app.use(cors());

app.get('/friends', (req, res) => {
	res.send(friends);
});

app.post('/new-friend', (req, res) => {
	friends.push(req.body);
	res.send(friends);
});

app.listen(5000, () => {
	console.log('server listening on port 5000');
});
