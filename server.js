const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


// starting a server
app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});