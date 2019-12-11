const express = require('express');

const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'dist')));

let port = process.env.PORT || '8087';

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
});