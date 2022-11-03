import React from 'react';
import { FaUsers, FaTools,  } from 'react-icons/fa';
import { BiCheckShield } from "react-icons/bi";
import { CiDeliveryTruck, CiStopwatch } from "react-icons/ci";
import { FcOnlineSupport } from "react-icons/fc";

const Features = () => {
    return (
        <div className='text-center mt-12'>
                <p className='text-xl text-info font-bold'>Core Features</p>
                <h1 className="text-5xl font-bold mt-2">Why Choose Us</h1>
                <p className="py-6 text-slate-500 text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-3'>
                    <div className='mx-auto border border-stone-300 p-2 rounded'>
                        <FaUsers className='text-7xl mx-4'></FaUsers>
                        <p className='text-xl font-semibold'>Expert Team</p>
                    </div>
                    <div className='mx-auto border border-slate-300 p-2 rounded'>
                        <CiStopwatch className='text-7xl mx-4'></CiStopwatch>
                        <p className='text-xl font-semibold'>Timely Delivery</p>
                    </div>
                    <div className='mx-auto border border-slate-300 p-2 rounded'>
                        <FcOnlineSupport className='text-7xl mx-4'></FcOnlineSupport>
                        <p className='text-xl font-semibold'>24/7 Support</p>
                    </div>
                    <div className='mx-auto border border-slate-300 p-2 rounded'>
                        <FaTools className='text-7xl mx-4'></FaTools>
                        <p className='text-xl font-semibold'>Best Equipment</p>
                    </div>
                    <div className='mx-auto border border-slate-300 p-2 rounded'>
                        <BiCheckShield className='text-7xl mx-4'></BiCheckShield>
                        <p className='text-xl font-semibold'>100% Guranty</p>
                    </div>
                    <div className='mx-auto border border-slate-300 p-2 rounded'>
                        <CiDeliveryTruck className='text-7xl mx-4'></CiDeliveryTruck>
                        <p className='text-xl font-semibold'>Fastest Delivery</p>
                    </div>

                </div>
        </div>
    );
};

export default Features;