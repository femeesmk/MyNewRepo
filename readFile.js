const fs = require("fs");

fs.readFile('./lorem-ipsum.txt','utf8',(err, data) => {
    if (err) {
        return console.log(err);
        
    } 

    console.log(data);
})

fs.rename('./lorem-ipsum.txt','./gibberish.txt',(err) =>{
    if (err) {
        console.log(err);
    }

    console.log('File was renamed successfully!!');
})