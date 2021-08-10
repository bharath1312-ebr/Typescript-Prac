var Dummy = /** @class */ (function () {
    function Dummy() {
    }
    Dummy.prototype.register = function (input1, input2) {
        if (typeof input1 == "number") {
            console.log("using mobile num");
        }
        if (typeof input1 == "string") {
            console.log("using emailId");
        }
    };
    return Dummy;
}());
var register = new Dummy();
register.register("bharath1312", "bharath", "bharath@gmail.com");
