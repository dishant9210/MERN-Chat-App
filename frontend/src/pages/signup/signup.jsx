import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

  const [inputs,setInputs] = useState({
    fullName : "",
    password : "",
    confirmPassword : "",
    gender : "",
    username : "",

  });

  const {loading,signup} = useSignup();
const handleSubmit = (e)=>{
  console.log(inputs);
  e.preventDefault();
  signup(inputs);
}
const handleCheckBoxChange = (gender)=>{
  setInputs({
    ...inputs,gender
  })
}

  return (
    <div className='flex flex-col justify-center items-center min-h-screen mx-auto'>
      <div className='h-full sm:h-[450px] md:h-[650px] p-6 w-full max-w-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 shadow-md'>
        <h1 className='text-3xl text-center text-gray-300 font-semibold'>
          SignUp <span className='text-blue-500'>ChatApp</span>
        </h1> 
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full name</span>
            </label>
            <input type="text" className="input input-bordered grow" placeholder="Full name" 
            value={inputs.fullName} onChange={(e)=>{setInputs({...inputs,fullName : e.target.value })}}
            />
          </div>

          <div className="form-control w-full max-w-xs mt-4">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" className="input input-bordered grow" placeholder="Username"
            value={inputs.username} onChange={(e)=>{setInputs({...inputs,username : e.target.value })}}
            />
          </div>

          <div className="form-control w-full max-w-xs mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" className="input input-bordered grow" placeholder="Password" 
            value={inputs.password} onChange={(e)=>{setInputs({...inputs,password : e.target.value })}}
            />
          </div>

          <div className="form-control w-full max-w-xs mt-4">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" className="input input-bordered grow" placeholder="Confirm Password"
            value={inputs.confirmPassword} onChange={(e)=>{setInputs({...inputs,confirmPassword : e.target.value })}}
            />
          </div>
          <GenderCheckbox onCheckBoxChange ={handleCheckBoxChange} gender = {inputs.gender} />

          <Link to={"/login"} className="btn btn-link mt-4">Already have an account?</Link>

          <div className="mt-4">
            <button className="btn btn-primary w-full"
            disabled ={loading}
            >{loading? <span className='loading loading-spinner'></span> :"SignUp"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
