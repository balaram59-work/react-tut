import React from 'react'
import { Link,Route } from 'react-router-dom'
import Members from './Members'
class Welcome extends React.Component{
    
    render()
    {
        return( 
        <>
        <h2>welcome to  {this.props.name}</h2>
        <Link to ="/members"> Click here to know the team members </Link>
        
        </>
        )
    }
}
export default Welcome