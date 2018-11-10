const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Google Home');
});

// starting a server
app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});