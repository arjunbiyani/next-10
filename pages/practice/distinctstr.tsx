
const max_str = (str,k) => {
    let windowstart=0,
    maxlen=0,
    charfreq={};

    // Condition  = No of unique characters in SD 
    // 
    //
        for (let winEnd=0;winEnd < str.length;winEnd++)
        {
            console.log("Primary ##### "+winEnd);
            console.log(charfreq);
            const rightchar=str[winEnd];
            if(!(rightchar in charfreq))
            {
                charfreq[rightchar]=0;
               
            }
        
            charfreq[rightchar] +=1;
            console.log(charfreq);
           while(Object.keys(charfreq).length > k )
           {   
                const leftchar=str[windowstart];
                console.log("Left Char - "+str[windowstart]);
                charfreq[leftchar] -= 1;
                if (charfreq[leftchar] === 0) {
                    delete charfreq[leftchar];
                  }
                windowstart++;
           }
           
           maxlen = Math.max(maxlen, winEnd - windowstart +1);
          

        }

        //Object.keys(str).length
    return maxlen;

    }
    
    
    console.log("Answer : "+max_str("aarai",2));
    
    export default function test (){
        
        return (<div> Distinct Characters</div>);
    }