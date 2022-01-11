
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send(`Hi world! I'm Matias Suez.`);
})

app.listen(3000);
console.log(`Server on port`, 3000);