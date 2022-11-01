// import frameworks
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Make sure the server is runing
app.get('/', (req, res) => {
    res.send('The server is working');
});

app.use(express.json());

// connect to the top level
//app.use('/api/auth', require('./routes/api/auth/gateway.js'));

// initialize and start the server
const PORT = 8000;
app.listen(PORT, () => console.log('Server is started on port 8000'));
