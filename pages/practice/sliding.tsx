
const max_sub = (k,arr) => {
console.log("Inside");
var max = 0;
var max_total=0;
console.log("length "+(arr.length-k+1));
for(var i=0;i<arr.length-k+1;i++)
{
    max_total=0;
    for(var j=i;j<k+i;j++)
    {
        
        max_total=arr[j]+max_total;
      
    }
    if(max_total>max)
    {
        max=max_total;
        
    }
    console.log("$$$"+arr[i]);
    console.log(max_total);
}
  return max;
}


console.log("FINAL"+max_sub(2,[1,2,3,4]));

export default function test (){
    
    return (<div> Sliding Window </div>);
}