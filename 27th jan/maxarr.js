var a=prompt("Enter total values");
a=parseInt(a);
var arr=[];

var i=0;

for(i=0; i<a; i++){
    arr[i]=prompt("Enter data");
}
    console.log(arr);

var max=arr[0];

var i=0;

  for(i=0; i<a; i++){
      if(arr[i]>max){
          max=arr[i];
     }
}

alert(max +" is your maximum value");
console.log(max);
