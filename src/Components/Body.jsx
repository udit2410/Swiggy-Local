import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import restaurantList from '../utility';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Customhooks/useOnlineStatus';

const Body = () => {
  const [restaurants,setrestaurants]=useState([]);
  const [filteredrestaurants,setfilteredrestaurants]=useState([]);
  const [searchText,setsearchText]=useState("");


  useEffect(()=>{
      
    fetchData();

  },[])

  const fetchData= async ()=>{
   
    const data= await fetch("http://localhost:3000/hotels");
    const json=await data.json();
     console.log(json);
     setrestaurants(json);
      
       setfilteredrestaurants(json);

  }
 const onlineStatus=useOnlineStatus()
  if(onlineStatus===false){
         return <h1>Hey!! you went offline</h1>
  }

  if(restaurants.length===0){
    return <Shimmer></Shimmer>
  }

  return (
    <div>
       <div className="body">
           <div className="filter-btn flex  justify-end px-16">
               <button className='mt-4 border-2 border-gray-300 p-2 rounded-md bg-slate-300 hover:bg-black hover:text-white'
                 onClick={()=>{
                     const filteredlist= filteredrestaurants.filter((restaurant)=>{
                      return restaurant.info.avgRating>4.2;
                     })
                     setrestaurants(filteredlist);
                 }}
               >Top rated Restaurant</button>
           </div>
           
           <div className="search m-4">
                <input className="border-2 border-black" type="text" value={searchText} onChange={(e)=>{
                   setsearchText(e.target.value);
               }}/>
               <button className='m-2 border-2 border-black px-3 py-2 rounded-md' onClick={()=>{
                      const filter=filteredrestaurants.filter((restaurant)=>{
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                      })
                      setrestaurants(filter);
               }} >
                Search
               </button>
           </div>

           <div className="resCard flex flex-wrap justify-center">
              
                      {
                        restaurants.map((restaurant)=>{
                            return(
                               <Link  to={"/restaurant/"+ restaurant.info.id }  key={restaurant.info.id} > <RestaurantCard resList={restaurant}></RestaurantCard></Link>
                            )
                        })
                      }
                   
                 
               
                

           </div>

       </div>

    </div>
  )
}

export default Body;