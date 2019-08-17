export const validateformBlank =()=>{
       
    if( document.getElementById("name").value === "" ){
        return false;
     }
     if(document.getElementById("email")){
      if(document.getElementById("email").value === ""){
        return false;
     }
   }
     if(document.getElementById("education")){
      if(document.getElementById("education").value === ""){
        return false;
     }
   }
   if(document.getElementById("address")){
      if(document.getElementById("address").value === ""){
        return false;
     }
   }

   
   if(document.getElementById("description")){
    if(document.getElementById("description").value === ""){
      return false;
   }
  }
   if(document.getElementById("descriptions")){
    if(document.getElementById("descriptions").value === ""){
      return false;
   }
 }
     
    return true ;
}


       
 
