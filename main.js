const express=require('express')
const app=express()






const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`port is up and running on ${port}`)
})