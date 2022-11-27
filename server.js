
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
mongoose.connect("mongodb://0.0.0.0:27017/app",
{   useNewUrlParser:true,
    useUnifiedTopology:true
}).then
   (()=>

{
    
            console.log("Data is connected....")
        }
);

const format=({
    
    id:Number,
       title:String,
       source:String,
       destination:String,
       travellers:Number,
       hotel:String,
       includes:Boolean,
       vehicle:Boolean,
    
});
const model=mongoose.model('trip',format);
app.post('http://localhost:4000/post',(req,res)=>{   //res=>res.data
    const data=new model({
                
       id:req.body.id,
       title:req.body.title,
       source:req.body.source,
       destination:req.body.destination,
       travellers:req.body.travellers,
       hotel:req.body.hotel,
       includes:req.body.includes,
       vehicle:req.body.vehicle

       
    })
    const value=data.save()
    res.send('Added successfully')
})






app.listen(4000,()=>{
    console.log('server running')});