import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left">
                <img className='w-3/4' src={logo1} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-5xl font-bold text-center">Login</h1>
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
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                    <label className="label">
                        <Link className="label-text-alt link link-hover"> Forgot password?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-info" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>New to Brander car shop? <Link className='text-info font-bold' to='/signup'>Sign In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;