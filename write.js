// const fs=require('fs')
// fs.readFile('read.txt','utf-8',function(data,err){
//     if(!data)
//         fs.writeFile('write.txt',err,(err)=>{
//             if(!data)
//             {
//                 throw err;
//             }
//         });
    

//     else{
//         throw err;

//     }
    

// });
// async method for the file handling purpose 
const {writeFile,readFile} = require('fs')
const {promisify} = require('util')

const readFileasync = promisify(readFile);
const writeFileasync = promisify(writeFile);

const file_handler = async()=>{
	try {
	 await writeFileasync('./writeMe.txt',"hello world");
        const content=await readFileasync('./writeMe.txt','utf-8');
        console.log(content)
		try {
			const data = await readFileasync('./writeMe.txt','utf-8');
			console.log('New file has been created .');
			console.log(data);
		} catch (error) {
			throw error;
		}
	} catch (error) {
		throw error;
	}
}

file_handler();


