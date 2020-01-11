import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Services from './views/services'
import Planets from './views/planets'
import Vehicles from './views/vehicles'
import People from './views/people'
import Home from './views/home';
import NotFound from './views/notfound';


const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path= {"/services/:id/category/:cat_id"} component={Services} />
                <Route exact path= {"/services"} component={Services} />
                <Route exact path= {"/planets"} component={Planets} />
                <Route exact path= {"/people"} component={People} />
                <Route exact path= {"/vehicles"} component={Vehicles} />
                <Route exact path= {"/"} component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Layout;