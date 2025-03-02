function func(){

    let code = prompt("What's the secret code?:");
    
    if (code.toUpperCase().indexOf("FR")>= 0){
        result = true;
        return document.getElementById("result").innerHTML = `The message " ${code} " is legitimate.`;

    }else if (code.toUpperCase().indexOf("AI")>=0){
        result = false;
        return document.getElementById("result").innerHTML = `The message " ${code} " is tampered with!`;
    
    }else if (code.toUpperCase().indexOf("AI")>=0 && code.toUpperCase().indexOf("FR")>=0){
        result = true;
        return document.getElementById("result").innerHTML = `The message " ${code} " is legitimate.`;

    }else if(code.indexOf("aI")>=0 || code.indexOf("Ai")>=0){
        result = false;
        return document.getElementById("result").innerHTML = `The message " ${code} " is tampered with!`;

    }else{
        result = false;
        document.getElementById("result").innerHTML = `The message " ${code} " is yet to be encoded!.`;
    }

        
    
    }

   
       
                    

    

   
    