import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    

    useEffect( () => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you cancel this order?');
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success('Delete successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        }

    }

    return (
        <div>
            <h2 className='text-2xl text-center'>You have <span className='font-bold'>{orders.length}</span> orders.</h2>
            {/* table order data */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th><label>
                        </label></th>
                        <th>Customer Name</th>
                        <th>Service name & Price</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order => <OrderRow
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        ></OrderRow>)
                    }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Orders;