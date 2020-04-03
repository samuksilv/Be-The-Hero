import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={6500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Logon} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/profile" component={Profile} exact />
                    <Route path="/incidents/new" component={NewIncident} exact />
                </Switch>
            </BrowserRouter>
        </>
    )
}