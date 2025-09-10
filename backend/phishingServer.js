import express from 'express';
import cors from 'cors';
import random from 'random';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
let i = 0;
app.post('/api/phishingServer', (req,res)=>{
    const url = req.body.url ;
    const arr = [0,1];
    const result = arr[i%2];
    i++;
    res.json({
        prediction : result,
        label : result == 1? "phishing" : "safe",
        confidence : Math.random()
    });
    

});


app.listen(port, ()=>{
    console.log(`Server Started on ${port}`)
});
