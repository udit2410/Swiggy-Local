import React from 'react';
import { URL } from '../utility';


const RestaurantCard = (props) => {
  
    const {resList}=props;
  return (
    <div className='Card border-2 border-gray-300 w-64 h-auto m-4 bg-slate-200 rounded hover:border-gray-200 hover:bg-slate-50 hover:cursor-pointer hover:scale-105'>
        <img className='w-60 m-auto mt-1 h-60 rounded' src={URL+resList.info.cloudinaryImageId} alt="" />
        <div className="info m-4">
             <h1 className='font-semibold'>{resList.info.name}</h1>
             <h1>Avg. Rating:{resList.info.avgRating}</h1>
             <h1>{resList.info.cuisines[0]}</h1>
             <h1>delivery Time:{resList.info.sla.slaString}</h1>
        </div>
       
    </div>
  )
}

export default RestaurantCard;