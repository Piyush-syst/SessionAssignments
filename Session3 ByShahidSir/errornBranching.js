let a,b;
for(let i=0;i<10;i++)
{
    if(i==3)
    {
        continue;
    }
    console.log(i);
    if(i==5)
    {
        break;
    }
}
a=2;
 try{
    // if(a==2) throw "It is 2";
//  }catch(err){
//      console.log(err);
 }
 finally{
     console.log("With throw or without i will be executed");
 }
 let a1="2";
 function test()
 {
switch(a1)
{
    case 1:
            console.log("Case 1");
            break;
          
    case "2": 
            console.log("Case 2");
            break;
    default:    
            console.log("DEFAULT") ;
}
}
test();
