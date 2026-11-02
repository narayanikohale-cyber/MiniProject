function getuser(id,cb){
    if(id<=0){
        cb("ID lower than 0",null);
    }else{
        setTimeout((c)=>{
            cb(null,{id,name:spiderman});
        },5000);
    }
}
getuser(1,(err,user)=>{
    if(err){console.log(err);}
      else{
        console.log(user);
      }
});