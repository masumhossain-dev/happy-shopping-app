import React, { useContext, useState } from 'react';
import { UserContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { loginUser } = useContext(UserContext);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                form.reset();
                navigate(from);
            })
            .catch(err => {
                setError(err.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="mb-40">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-10">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" />
                                <div className="form-control w-52">
                                    <label className="cursor-pointer label">
                                        <input onClick={() => { setShowPass(!showPass) }} type="checkbox" className="toggle toggle-primary toggle-xs" />
                                    </label>
                                </div>


                                <label className="label">
                                    <p className='text-error text-center'>{error}</p>
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;