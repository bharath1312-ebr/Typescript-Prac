var Day;
(function (Day) {
    Day["DAY1"] = "monday";
    Day["DAY2"] = "Tuesday";
    Day["DAY3"] = "Wednesday";
    Day["DAY4"] = "Thursday";
    Day[Day["ACCNO"] = 5510] = "ACCNO";
    Day[Day["PORT"] = 1212] = "PORT";
})(Day || (Day = {}));
console.log(Day.ACCNO);
var propImpl = /** @class */ (function () {
    function propImpl() {
        this.tyrebrand = "mrf";
        this.bodycolour = "red";
    }
    propImpl.prototype.engineOnOff = function () {
        console.log("Engine Activated");
    };
    return propImpl;
}());
var car;
car = new propImpl();
console.log(car);
var Submit = /** @class */ (function () {
    function Submit() {
        this.name = "Bharath";
        this.Mno = 878700987;
        this.area = "hyd";
    }
    Submit.prototype.m1 = function () {
        console.log("m1 in submit");
    };
    return Submit;
}());
var det = new Submit();
console.log(det);
det.m1();
var a = {
    a: 10,
    b: 20,
    c: "Bharath",
    d: "Dinesh"
};
console.log(a);
