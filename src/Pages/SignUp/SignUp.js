import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/')
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left">
                <img className='w-3/4' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="text" placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-info" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-info font-bold' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;