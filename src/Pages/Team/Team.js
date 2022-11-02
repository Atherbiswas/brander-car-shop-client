import React from 'react';
import person1 from '../../assets/images/team/1.jpg';
import person2 from '../../assets/images/team/2.jpg';
import person3 from '../../assets/images/team/3.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Team = () => {
    return (
        
            <div className='text-center mt-11'>
                <p className='text-xl text-info font-bold'>Team</p>
                <h1 className="text-5xl font-bold">Meet Our Team</h1>
                <p className="py-6 text-slate-500 text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-3 relative'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={person1} alt="person1" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                        <div className="grid grid-flow-col gap-4 text-2xl">
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagramSquare></FaInstagramSquare>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={person3} alt="person1" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                        <div className="grid grid-flow-col gap-4 text-2xl">
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagramSquare></FaInstagramSquare>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={person2} alt="person1" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                        <div className="grid grid-flow-col gap-4 text-2xl">
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagramSquare></FaInstagramSquare>
                            </div>
                        </div>
                    </div>
                    </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#next" className="btn btn-circle"> <FaArrowLeft></FaArrowLeft> </a> 
                        <a href="#next" className="btn btn-circle"> <FaArrowRight></FaArrowRight> </a>
                        </div>
                </div>
        </div>
    );
};

export default Team;