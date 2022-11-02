import React from 'react';
import { FaWpforms, FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-black text-white p-9 rounded-md mt-12'>
            <div className='flex justify-start items-center p-2 mx-2'>
                <FaWpforms className='text-3xl'></FaWpforms>
                <div className='m-2'>
                    <p>We are open monday-friday</p>
                    <h4 className='text-2xl'>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex justify-start items-center p-2'>
                <FaPhoneAlt className='text-3xl'></FaPhoneAlt>
                <div className='m-2'>
                    <p>Have a question?</p>
                    <h4 className='text-2xl'>+2546 251 2658</h4>
                </div>
            </div>
            <div className='flex justify-start items-center p-2'>
                <HiLocationMarker className='text-4xl'></HiLocationMarker>
                <div className='m-2'>
                    <p>Need a repair? our address</p>
                    <h4 className='text-2xl'>Liza Street, New York</h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;