
function smallest_sub(arr,s){
var smallestc=0;
    for(var i=0;i<arr.length;i++)
    {
        var sum=0
        var cnt=0;
        if(s==arr[i]||arr[i]>s){
            smallestc=1;          
        }else
        {
            for(var j=i;j<=arr.length-i;j++){
                sum = sum+arr[j];
                cnt++;
                if(sum>=s){
                    console.log(cnt);
                    if(cnt<smallestc || smallestc==0)
                        {
                            smallestc=cnt;
                        }
                    break;
                }
               
            }
            

        }
    }

    return smallestc;

}
    
    
    
    console.log("Length = "+smallest_sub([1,1,3,3,1],4));
    
    export default function test (){
        
        return (<div> Smallest sub array </div>);
    }