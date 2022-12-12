import express from 'express'
const app=express()

//authentication
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: process.env.ORG_KEY,
    apiKey:process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json())

app.get('/new',async (req,res)=>{
    const response = await openai.createImage({
        prompt: "game of thrones",
        n: 1,
        size: "1024x1024",
      });
     const  image_url = response.data.data[0].url;
      res.json(image_url)
})




const port=process.env.PORT || 7000
app.listen(port,()=>{
    console.log(`port is up and running on ${port}`)
})