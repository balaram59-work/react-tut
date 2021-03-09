import {BrowserRouter,Link,Route} from 'react-router-dom'
import React from 'react'
import App from './App'
import Members from './Members'
import Balaram from './Balaram'
import Vachana from './Vachana'
import Sunil from './Sunil'
import Praveen from './Praveen'
const Routes =()=>
{
    return(
        <>
            <Route exact path="/"> 
                <App/>
            </Route>
            <Route  exact path= "/members"  component={Members}>
            </Route>
            <Route   path= "/members/balaram"  component={Balaram}>
            </Route>
            <Route path= "/members/vachana" component={Vachana}>
                
                </Route>
            <Route   path= "/members/sunil"  component={Sunil}>
            </Route>
            <Route   path= "/members/praveen"  component={Praveen}>
            </Route>
           
        </>
    )
}
export default Routes