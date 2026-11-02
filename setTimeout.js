function getuser(id,cb){
    setTimeout(cb({id,name:"suspend"})
            ,500);
}
console.log(`start`);
getuser(1,((user)=>{
    console.log(user);
}));
console.log(`end`)