const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const success=true;
        if(success){
            resolve('Data receive');}
        else{
            reject(new error("thand le calm"))
        }
        
    },500);
    });
    promise.then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        console.log("well done");
    })