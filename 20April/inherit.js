var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.authenticate = function (username, password) {
        if (username = "sai", password = 1234) {
            console.log("Login Successfull");
        }
        else {
            console.log("login Failed");
        }
    };
    return Login;
}());
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Home;
}(Login));
var home = new Home();
home.authenticate("sai", 1234);
var Bank = /** @class */ (function () {
    function Bank() {
    }
    return Bank;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Customer;
}(Bank));
var customer = new Customer();
customer.name = "HDFC";
customer.address = "hyderabad";
customer.ifsccode = "Hdfc123";
customer.accNo = 123456;
customer.balance = 15000;
console.log(customer);
var CustomerA = /** @class */ (function () {
    function CustomerA(name, accNo, balance, aadharNo, MobileNo) {
        this.name = name;
        this.accNo = accNo;
        this.balance = balance;
        this.aadharNo = aadharNo;
        this.MobileNo = MobileNo;
    }
    return CustomerA;
}());
var cust = new CustomerA("Bharath", "1223", "5000rs", "123415521666", "9898981212");
console.log(cust);
var cust2 = new CustomerA("Dinesh", "1223", "5000rs", "123415521666", "9898981212");
console.log(cust2);
var Cars = /** @class */ (function () {
    function Cars(model, price, manyear) {
        this.model = model;
        this.price = price;
        this.manyear = manyear;
    }
    return Cars;
}());
var car = new Cars("tesla", "75Lakhs", 2018);
console.log(car);
