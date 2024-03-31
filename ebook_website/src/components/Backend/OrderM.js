import React from 'react';
import { Link } from "react-router-dom"
function OrderM() {
    return (
        <div className='bg-white-300 text-dark'>
            <div className='mx-auto text-center font-serif '>
                <Link to="/UserM" className="mx-10 text-xl">User Management</Link>
                <Link to="/Stock" className="mx-10 text-xl">Stock Management</Link>
                <Link to="/OrderM" className="mx-10 text-xl">Order Management</Link>
                <Link to="/CustomerM" className="mx-10 text-xl">Customer Support Management</Link>
            </div>
        </div>
    );
}

export default OrderM;
