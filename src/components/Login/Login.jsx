import React, { useContext, useState } from 'react';
import { UserContext } from '../../providers/AuthProvider';

const Login = () => {
    const { user, loginUser, setUser } = useContext(UserContext);
    const [error, setError] = useState('')
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        setError('')
        if (password.length < 6) {
            setError('Your password must be 6 character!')
        }

        loginUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    console.log(user)
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
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