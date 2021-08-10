class Login{
    authenticate(username:string,password:any){
        if(username="sai",password=1234){
            console.log("Login Successfull");
        }
        else{
            console.log("login Failed");
        }       
    }
}
class Home extends Login{
     }

var home = new Home();
home.authenticate("sai",1234);


class Bank{
    name:string;
    address:string;
    ifsccode:any;
}
class Customer extends Bank{
    accNo: Number;
    balance: Number;
}
var customer = new Customer();
customer.name = "HDFC";
customer.address= "hyderabad";
customer.ifsccode = "Hdfc123"
customer.accNo = 123456;
customer.balance = 15000;
console.log(customer);


class CustomerA{
    name;
    accNo;
    balance;
    aadharNo;
    MobileNo;
    constructor(name,accNo,balance,aadharNo,MobileNo){
        this.name= name;
        this.accNo= accNo;
        this.balance= balance;
        this.aadharNo= aadharNo;
        this.MobileNo= MobileNo;
    }
}
var cust = new CustomerA("Bharath","1223","5000rs","123415521666","9898981212");
console.log(cust);

var cust2 = new CustomerA("Dinesh","1223","5000rs","123415521666","9898981212");
console.log(cust2);


class Cars{
    model;
    price;
    manyear;
    constructor(model,price,manyear){
        this.model = model;
        this.price = price;
        this.manyear = manyear;
    }
}
 var car = new Cars("tesla","75Lakhs",2018);
 console.log(car);
