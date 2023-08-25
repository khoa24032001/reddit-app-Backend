const express = require("express");
const app = express();
app.use(express.json());

app.post("v1/update", (res,req) => {
    setTimeout(()=>{
        res.status(200).json(req.body);
    },[2000])
})

app.listen(8000,()=>{
    console.log("Server is running...")
})