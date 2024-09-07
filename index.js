const express = require('express');
const urlRoute = require('./routes/url');
const mongo = require('./db');

const app = express();
const PORT = 3000;
app.use(express.json());

app.use('/url', urlRoute);

app.use('/url/:shortId', urlRoute);

app.listen(PORT, () => {
    console.log(`Server started and listening on http://localhost:${PORT}`);
});
