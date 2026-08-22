const express = require("express");
const app = express();

const port = 8080;

app.set("view en")



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})