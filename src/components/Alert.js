import React from 'react';
import { Link } from 'react-router-dom';

const Layer1 = () => {
    return (
        <>
            <h2> Alert </h2>
            <Link to="/orders"> order summary </Link>
            <br/>
            <Link to='/orders/order-details'>Order Details</Link>
        </>
    )
}

export default Layer1;