import React from 'react'
import { Link, Route } from 'react-router-dom'
import BalaramAge from './BalaramAge'
const Balaram=({match})=>{
return (
    <>
<h3> balaram is SE and </h3>
<Link to = {`${match.url}/age`}> his age is</Link>
<Route path ={`${match.url}/age`}>
    <BalaramAge/>
</Route>
</>
)
}
export default Balaram