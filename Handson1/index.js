const http=require('http');
const data={
    firstname:'Asma',
    lastname:'Khan',
    age:21,
    

}
const server=http.createServer((req,res)=>{
    res.write(" HELLO BUD ");
    res.write(JSON.stringify(data));
    res.end();

})
server.listen(3000,()=>{
    console.log("Node-handson1 is running")
})