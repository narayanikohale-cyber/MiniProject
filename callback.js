function greetings (name,cb){
    console.log(`${name} Hello!`);
    cb();
}

greetings("Narayani",()=>{
    console.log(`Greeting printed`);
});