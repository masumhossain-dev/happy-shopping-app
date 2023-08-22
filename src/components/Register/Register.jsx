import React, { useContext, useState } from 'react';
import google from '../../images/auth media icon/google.png';
import facebook from '../../images/auth media icon/facebook.png'
import { UserContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const { googleUserCreator, facebookUserCreator, createUser, user } = useContext(UserContext)
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confPass.value;
        setError('')

        if (password !== confirmPass) {
            setError('Password is not matched!')
        }
        else if (password.length < 6) {
            setError('Your password must be 6 character!')
        }

        createUser(email, password)
            .then(res => {
                form.reset();
            })
            .catch(err => {
                setError(err.message)
            })
    }
    const googleSignIn = () => {
        googleUserCreator()
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const facebookSignIn = () => {
        facebookUserCreator()
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })
    }

    if (user) {
        return <Navigate to='/'></Navigate>
    }

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
                                <input type={showPass ? 'text' : 'password'} placeholder="Password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={showPass ? 'text' : 'password'} name='confPass' placeholder="Confirm password" className="input input-bordered" required />
                                <div className="form-control w-52">
                                    <label className="cursor-pointer label">
                                        <input onClick={() => { setShowPass(!showPass) }} type="checkbox" className="toggle toggle-primary toggle-xs" />
                                    </label>
                                </div>

                                <p className='text-error text-center'>{error}</p>
                            </div>
                            <p className='text-center text-xl'>or</p>
                            <button></button>
                            <div className='flex justify-around'>
                                <button onClick={googleSignIn}><img src={google} alt="" /></button>
                                <button onClick={facebookSignIn}><img src={facebook} alt="" /></button>
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