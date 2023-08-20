import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/auth media icon/google.png';
import facebook from '../../images/auth media icon/facebook.png'
import { UserContext } from '../../providers/AuthProvider';

const Register = () => {
    const { user, createUser, setUser } = useContext(UserContext)
    const [error, setError] = useState('')
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confPass.value;
        setError('')

        if (password !== confirmPass) {
            setError('Password is not matched!')
        }
        else if (password.length < 6) {
            setError('Your password must be 6 character!')
        }

        createUser(email, password)
            .then(res => {
                setUser(res)
            })
            .catch(err => {
                setError('Email Already Used')
            })
    }
    console.log(user)

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="mb-40">
                    <div className="text-center mb-10">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confPass' placeholder="Confirm password" className="input input-bordered" required />
                                <p className='text-error text-center'>{error}</p>
                            </div>
                            <p className='text-center text-xl'>or</p>
                            <button></button>
                            <div className='flex justify-around'>
                                <button><img src={google} alt="" /></button>
                                <button><img src={facebook} alt="" /></button>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;