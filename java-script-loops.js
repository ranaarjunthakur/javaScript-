 let x=100
 if(x<100)
 x=20
 console.log('one',x)
 
 ///////////////////////
 
 let animals=['cat','dog','lion','tiger']
 
 for(let i=0;i<animals.length; i+=2){
     console.log(animals[i])
 }
 
 //////////////////////////
 
 
 let a = [1,2,3,4,5]
for (let v of a){
    console.log(v)
}

///////////////////

for(let x=10; x>1; x-=2){
    console.log('val',x)
}

//////////////////////

for(let a=4;a>4;a++){
    console.log('val1',a)
}

///////////////////

let a1=10;
do{
  console.log('do-while',a1) 
  a1--
}while(a1>3)

/////////////////

let a2=10
while(a2>3){
    console.log('while',a2);
    a2--
}

////////////////////

for(let a3=5; a3>1; a3--){
    console.log(a3)
}

/////////////////

let z=5;
while(z>1){
    console.log(z)
    z--
}


///////////////
let counter = 10;
let show = false;

if(counter <= 10 && show == false){
   console.log('test')
}

////////// reverse days ////////

let days =[1,2,3,4,5,6,7]

for(let i=days.length-1; i>=0; i--){
    console.log([i])
}

