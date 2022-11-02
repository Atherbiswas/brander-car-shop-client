import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    const {img, title, price} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img  src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className='flex justify-between'>
                <p className='text-xl font-semibold text-info'>Price:$ {price}</p>
                <FaArrowRight className='text-info'></FaArrowRight>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;