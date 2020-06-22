import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import { NavigationItems } from '../../components/Navigation/NavigationItems'
import Home from '../../containers/Home/home' ;
import Create from '../../containers/Create/Create'
import Edit from '../../containers/Edit/Edit';


const routes = [
    {
        path: "/",
        exact: true,
        main: Home
    },
    {
        path: "/create",
        main: Create
    },
    {
        path: "/edit/:id",
        main: Edit
    }
];

class Layout extends Component {
    render() {
        return (
            <div>
                <NavigationItems />
                <div>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </Switch>
                </div>
            </div>

        )
    }
}


export default Layout;