export const validateformBlank =()=>{
       
    if( document.getElementById("name").value === "" ) {
        return false;
     }
      if(document.getElementById("email").value === ""){
        return false;
     }
     
      if(document.getElementById("education").value === ""){
        return false;
     }
      if(document.getElementById("address").value === ""){
        return false;
     }
     
    return true ;
}


       
 
