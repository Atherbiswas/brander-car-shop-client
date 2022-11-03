import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img, title, price, _id} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img  src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className='flex justify-between'>
                <p className='text-xl font-semibold text-info'>Price:$ {price}</p>
                <Link to={`/checkout/${_id}`}><FaArrowRight className='text-info'></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;