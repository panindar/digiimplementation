const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/digi'));

app.get('/*', (req, res) => 
    res.sendFile('index.html', {root: 'dist/digi/'})
);
app.listen(process.env.PORT || 4200)