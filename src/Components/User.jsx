import React from 'react';

const User = () => {
  

  return (
    <div className="user-card">
      <h2>Name: Udit Yadav</h2>
      <p>Place: Delhi, India</p>
      <p>GitHub Profile: <a href="https://github.com/udit2410" className='text-xl font-medium cursor-pointer' target="_blank" rel="noopener noreferrer">Take me to GitHub</a></p>
      <p>LinkedIn Profile: <a href="https://www.linkedin.com/in/udit-yadav-a971021a6/" className='text-xl font-medium cursor-pointer' target="_blank" rel="noopener noreferrer">Take me to Linkdin</a></p>

      <p>Contact: Udit2410@gmail.com</p>
    </div>
  );
}

export default User;
