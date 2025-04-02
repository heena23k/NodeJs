// async = no wait 
//sync = step by step 
// -- async way 
const fs = require('fs');
// fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
        
//     }
//     console.log(data);
    
// })

// // ---now we rite it in sync way--

// const fileContent = fs.readFileSync('file.txt','utf8');
// console.log(fileContent);


// --for write 
// fs.writeFile("text.txt",'subscribe to our community',(err)=>{
//     if(err){
//         console.error(err);
// return;
//     }
//     console.log('File written successfully');
    
// })

// // in sync way
// fs.writeFileSync('text2.txt','hellllloooooo' ,'utf-8')
// console.log('file written successfully');


// for stat-----
// fs.stat('file.txt',(err,stats)=>{
//     if(err){
//         console.log(err);
//         return;
        
//     }
//     console.log(stats);
    
// })

// ----in sync way --

//  const stats = fs.statSync('file.txt')
//  console.log(stats);

// --to make an folder or directory--

// fs.mkdir('new_Directory',(err)=>{
//     if(err){
//         console.log(err);
//         return;
        
//     }
//     console.log("Directory created");
    
// })

//-- for remove directory--
// fs.rmdir('new_Directory',(err)=>{
//         if(err){
//             console.log(err);
//             return;
            
//         }
//         console.log("Remove directory");
        
//     })



//---delete file---
// fs.unlink('file.txt',(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     console.log('removed file');
    
// })


// sync way
fs.unlinkSync('text2.txt')
console.log("Done.......");
