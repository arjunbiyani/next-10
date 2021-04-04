
const max_fruits = (arr) => {
       var max_fruits=0;
       const k=2;
       var windowstart=0;
        var charcount={};
        for (var i=0;i<arr.length;i++){
            if(!(arr[i]in charcount))
            {
                charcount[arr[i]] =0;
            }
            charcount[arr[i]] +=1;
            max_fruits=max_fruits+1;
             if(Object.keys(charcount).length > k)
             {
                 var leftchar = arr[windowstart];
                 max_fruits -=charcount[leftchar];
                 delete charcount[leftchar];
                 windowstart++;
             }
             
             var check=0;             
            max_fruits=Math.max(max_fruits,check);
    
        }

        return max_fruits;
       
    }
    
    
    console.log("Answer : "+max_fruits(['a','b','c','a','c']));
    
    export default function test (){
        
        return (<div> Fruit basket</div>);
    }