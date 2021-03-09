import React from 'react'
import { Link, Route } from 'react-router-dom'
const Vachana=({match})=> {
    return (
        <>
    <h3> vachana is contingent worker and </h3>
    <Link to = "/members/vachana/location"> she is based out of </Link>
    <Route path ="/members/vachana/location">
            bangalore
    </Route>
    </>
    )
    }
export default Vachana