import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt="" />
                    <img src={parts} className="absolute w-1/2 top-1/2 border-8 right-5 rounded-lg shadow-2xl" alt="" />
                </div>
                <div className='w-1/2'>
                <p className='text-2xl text-info font-bold'>About Us</p>
                <h1 className="text-5xl font-bold my-4">We are qualified <br /> & of experience <br /> in this field</h1>
                <p className="py-6 text-slate-500 text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="py-6 text-slate-500 text-xl">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-info font-semibold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;