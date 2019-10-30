import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Rooms from '../pages/Rooms'
import Room from '../pages/Room'
import Page404 from '../pages/Page404'

const AppRouter = () => {
    return (
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/rooms" component={Rooms} />
               <Route exact path="/rooms/:slug" component={Room} />
               <Route component={Page404} />
           </Switch>

    )
}

export default AppRouter
