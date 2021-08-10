  
  enum Day{
      DAY1 = "monday",
      DAY2 = "Tuesday",
      DAY3 = "Wednesday",
      DAY4 = "Thursday",
      ACCNO = 5510,
      PORT = 1212
  }
  console.log(Day.ACCNO);

// Type compatibility


  interface Car{
   tyrebrand: string;
   bodycolour: string;
   engineOnOff();
 }

 class propImpl implements Car{
  tyrebrand = "mrf";
  bodycolour = "red";
  engineOnOff(){
    console.log("Engine Activated")
  }
 }
 var car:Car;

 car= new propImpl();
 console.log(car);
  
 // Structure Compatibility

 interface Details{
    name: string;
    Mno : number;
    area: string;
    m1();
}
class Submit{
    name = "Bharath";
    Mno = 878700987;
    area = "hyd";
    
    m1(){
      console.log("m1 in submit");
    }
}
  var det:Details = new Submit(); 

  console.log(det);
  det.m1();

  interface A{
    a:number;
    b:number;
    c:string;
    d:string;
  }

  var a:A ={
    a:10,
    b:20,
    c:"Bharath",
    d:"Dinesh"
  }
  console.log(a);
 