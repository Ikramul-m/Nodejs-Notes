
const fs = require("fs");

fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        throw err
        //return err
    }
    console.log(data)
})





