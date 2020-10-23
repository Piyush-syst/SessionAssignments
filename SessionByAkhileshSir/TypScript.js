//Class
var Temp = /** @class */ (function () {
    function Temp() {
    }
    Temp.prototype.getAll = function (Name) {
        console.log("Let's Go", Name);
    };
    return Temp;
}());
var tmp = new Temp;
tmp.getAll("Rampage");
//Enumeration
var Category;
(function (Category) {
    Category[Category["ASE"] = 1] = "ASE";
    Category[Category["SE"] = 2] = "SE";
    Category[Category["SSE"] = 3] = "SSE";
})(Category || (Category = {}));
var CategoryName = Category[1];
console.log(CategoryName);
function printStandard(StandardObj) {
    console.log(StandardObj.Standard, StandardObj.name);
}
var newstudent = { name: "Rakshit Ameriya", Standard: "12th" };
printStandard(newstudent);
// Functions
var Greater = function (x, y) {
    var result;
    if (x > y)
        result = x;
    else
        result = y;
    return result;
};
var Add = function (x, y) {
    return x + y;
};
console.log(Greater(5, 9), true);
console.log(Add(5, 7), 5, "What is this?");
//Generics
function identity(arg) {
    console.log(arg);
    return arg;
}
identity("String");
identity(45);
identity(true);
