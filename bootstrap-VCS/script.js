const password = prompt("enter password that is either longer than 6 characters OR has the letter z");

if (password.length > 6 || password.indexOf ("z")!==-1) 
            {console.log("password accepted")}
        
else {console.log ("wrong format")}
    
    let students = ["red",5,null,false,true,76]