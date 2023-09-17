import { useEffect, useState } from "react";
import { Menu_URL } from "../utility";

const useRestaurantMenu=(resId)=>{
     const [resInfo,SetresInfo]=useState(null);
     useEffect(()=>{
         
             fetchData()

     },[])
    
     const fetchData= async ()=>{
        const response= await fetch(Menu_URL + resId);

        const json= await response.json()
       SetresInfo(json);
     }
    
    
    return resInfo;
}

export default useRestaurantMenu;