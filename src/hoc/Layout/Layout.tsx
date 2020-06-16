import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { NavigationItems } from '../../components/Navigation/NavigationItems'
import Home from '../../containers/Home/home' ;


const routes = [
    {
        path: "/",
        exact: true,
        main: Home
    },
    {
        path: "/create",
        main: () => <h2>create</h2>
    },
    {
        path: "/edit/:id",
        main: () => <h2>edit</h2>
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