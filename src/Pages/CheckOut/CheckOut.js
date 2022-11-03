import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const {_id,  title, price} = service;
    const {user} = useContext(AuthContext);

    const handleOrderConfirm = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        if(phone.length < 11){
            toast.error('Phone number should be 11 characters or longer')
        }
        else{
            fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.success('Order confirm successfully');
                form.reset();
            }
        })
        .catch(error => console.error(error))
        }

    }
    return (
        <div>
            <form onSubmit={handleOrderConfirm}>
                <h2 className='text-3xl text-center font-bold'>Service: {title}</h2>
                <h3 className='text-2xl text-center mb-5'>Price: ${price}</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input type="text" name="firstName" placeholder="First name" className="input input-bordered w-full" />

                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" />

                    <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered w-full" required/>

                    <input type="text" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
                    </div>

                    <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Write Your Message"></textarea>
                    <input type="submit" className="btn btn-info" value="Confirm Order" />
            </form>
        </div>
    );
};

export default CheckOut;