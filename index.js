
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


const x = "THIS IS DONE BY ME";

fs.writeFile("./sampleTwo.txt", x, () => {
    console.log("Written")
})



fs.readFile("./sampleTwo.txt", "utf-8", (err,data) =>{
    if(err){
        throw err
    }
    
    console.log(data)
})






