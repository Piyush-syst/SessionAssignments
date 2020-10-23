console.log("Hello world");
//Use of let,var,operator, arrow function, assignment operator

ab="React-Native";
let a, b;
a=10;
b=12;
let sum;
sum=(()=>a+b)();


//If-else, BOOLEAN,==,===
let tnf;
tnf= true;
if(a==b)
{tnf=true; }
else if(a===b){
tnf=true;
}
else{
    tnf=false;
}
console.log(tnf);
console.log(ab);
console.log(sum);

//Use of String
let str;
str="It's Amazing";
console.log(str.length,str.split(" "));

//object Data Type, array,undefined,null
let k={
    street:"Ravi nagar",
    city:"Indore"
};
console.log(k.street);
let arr= [2,3,4,5,6,7];
console.log(arr[4]);
let ak;
console.log(typeof ak);
let al=null;
console.log(al);

