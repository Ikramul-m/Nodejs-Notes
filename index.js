
const fs = require("fs");

fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        throw err
        //return err
    }

    //10000000

    console.log(data)
})

// const a = fs.readFileSync("./sample.txt","utf-8");



// console.log(a)
console.log("I am first!!!")





