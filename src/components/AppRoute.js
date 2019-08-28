import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Alert from './Alert';
import Details from './Details';
import Orders from './Orders';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <>
            <Route path="/" exact component={Alert}/>
            <Route path="/orders" exact component={Orders}/>
            <Route path="/orders/order-details" component={Details}/>
            </>
        </BrowserRouter>
    )
}

export default AppRoute;