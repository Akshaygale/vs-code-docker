const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.json([
        {
            "id": "1",
            "name": "aksh"
        },

        {
            "id": "2",
            "name": "Vikash"
        },
    ])
})

app.listen(4000, () => {
    console.log("listning from port 4000");
})

