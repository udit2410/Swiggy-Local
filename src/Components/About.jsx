import React from 'react'
import User from './User'
import UserClass from './UserClass'
const About = () => {
  return (
    <> 
    <div className='text-4xl m-11'>We are here to serve food to the whole country</div>
    <div className=' flex justify-center items-center '>
     
      <UserClass name={"Udit yadav"} place={"Delhi, India"}></UserClass>
    </div>

    </>
   

  )
}

export default About