//Class
class Temp{
    app1 : string;
    key2 : number;

   getAll(Name: string) {

        console.log("Let's Go", Name);
    }
}
let tmp = new Temp;
tmp.getAll("Rampage");


//Enumeration
enum Category {
  ASE = 1,
  SE,
 SSE,
}
let CategoryName: string =Category[1];

console.log(CategoryName);

//Interface
interface Student {
  Standard : string;
  name : string;
}

function printStandard(StandardObj: Student) {
  console.log(StandardObj.Standard, StandardObj.name);
}

let newstudent = { name: "Rakshit Ameriya", Standard: "12th" };
printStandard(newstudent);


// Functions
let Greater = function (x: number, y: number): number {
  let result : number ;
  if(x>y)
    result =x;
  
  else
    result =y;
  
  return result;
}


let Add: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
console.log(Greater(5,9), true);
console.log(Add(5,7),5, "What is this?");

//Generics
function identity<Type>(arg): Type {
 console.log(arg);
 return arg ;
}
identity("String");
identity(45);
identity(true);
