import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state={
            count:1,
        }


    }
    render(){
             const {name,place}=this.props

        return(
             <>
           
            <div className="user-card">
      <h2>Name: {name}</h2>
      <p>Place: {place}</p>
      <p>GitHub Profile: <a href="https://github.com/udit2410" className='text-xl font-medium cursor-pointer' target="_blank" rel="noopener noreferrer">Take me to GitHub</a></p>
      <p>LinkedIn Profile: <a href="https://www.linkedin.com/in/udit-yadav-a971021a6/" className='text-xl font-medium cursor-pointer' target="_blank" rel="noopener noreferrer">Take me to Linkdin</a></p>

      <p>Contact: Udit2410@gmail.com</p>
        
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            })
        }}> Increase Count</button>

         <button onClick={()=>{
            this.setState({
                count:this.state.count-1,
            })
        }}> Decrease Count</button>
        
    </div></>
        )
    }
}

export default UserClass;