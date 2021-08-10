class Dummy{
    register(m_no:number,password:string,emailId:string);
    register(username:string,password:string, emailId:string);
    register(input1:string | number, input2:string, input3:string){
         if(typeof input1 == "number"){
             console.log("using mobile num");
         }
         if(typeof input1 == "string"){
             console.log("using emailId")
         }
        }
}
var register = new Dummy();
register.register("bharath1312","bharath","bharath@gmail.com");