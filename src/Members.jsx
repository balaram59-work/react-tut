
import {Route,Link} from 'react-router-dom'
import React from 'react'
import Vachana from './Vachana'
//{`${match.url}/vachana`}
const Members=({match})=>
{
    return (
        <>
            <h2>There are four members and they are vachana,balaram,sunil,praveen </h2>
            <Link to = "/members/balaram"> click here to know about balaram </Link>
            <br/>
            <Link to = "/members/vachana"> click here to know about vachana </Link>
            <br/>
            <Link to = "/members/sunil"> click here to know about sunil </Link>
            <br/>
            <Link to = "/members/praveen"> click here to know about praveen </Link>
               
            
        </>
    )
}
export default Members