import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin.js';

const Login = () => {
  const [inputs,setInputs] = useState({
    username : "",
    password : "",
  });

  const { loading,login} =useLogin();
  const handleSubmit = async (e)=>{
    console.log(inputs);
    e.preventDefault();
    await login(inputs);

  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen mx-auto'>
      <div className='h-full sm:h-[450px] md:h-[500px] p-6 w-full max-w-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 shadow-md'>
        <h1 className='text-3xl text-center text-gray-300 font-semibold'>
          Login <span className='text-blue-500'>ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                />
              </svg>
              <input type="text" className="grow" placeholder="Username"
              value={inputs.username} onChange={(e)=>{setInputs({...inputs ,username:e.target.value })}}
              />
            </div>
          </div>

          <div className="form-control w-full max-w-xs mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password"
              value={inputs.password} onChange={(e)=>{setInputs({...inputs ,password:e.target.value })}}
              />
            </div>
          </div>

          <Link to={"/signup"} className="btn btn-link mt-4">Don't have an account?</Link>

          <div className="mt-4">
            <button className="btn btn-primary w-full"
            disabled={loading}
            >{loading ? <span className='loading loading-spinner'></span> : "Login"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
