import React from 'react';
import loginImage from '../../assets/images/login/login.svg'
import Button from '../../Utils/Button/Button';
import { FaFacebook,  FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex min-h-[calc(100vh-120px)] items-center justify-between'>
            <div className='w-1/2'>
                <img src={loginImage} alt="" />
            </div>
            <div className='w-1/2 border p-[75px] rounded-lg'>
                <h1 className='text-5xl font-bold text-center'>Login</h1>
                <form className='space-y-7 mt-[50px]'>
                    <div className='space-y-3'>
                        <p>Email</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Username or email" />
                        </label>
                    </div>
                    <div className='space-y-3'>
                        <p>Password</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" placeholder='password' />
                        </label>
                    </div>
                    <button className='w-full'>
                        <Button btnName={"Login"} customStyle={"w-full bg-[#FF3811] text-white hover:bg-transparent hover:text-[#FF3811]"}/>
                    </button>
                </form>
                <p className='text-center mt-4'>
                    or Login with
                </p>
                <div className='text-4xl flex justify-center mt-8 items-center gap-5 *:cursor-pointer'>
                    <FaFacebook className='text-blue-600'/>
                    <FaLinkedin className='text-blue-900'/>
                    <FcGoogle className=''/>
                </div>
                <p className='text-xs text-center mt-8'>Not have account? <Link to={"/register"} className='text-[#FF3811]'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;