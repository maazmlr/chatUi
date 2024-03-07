import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Form = ({
    isSignIn=false

}) => {
  const [data,setData]=useState({
    ...(isSignIn && {
      fullName:""
    }),
    email:'',
    password:''
  })

 

  return (
    <div className='w-[30em] h-[30rem]  bg-primary shadow-lg rounded-lg flex flex-col items-center justify-center '>
    <h2 className='text-3xl text-accent font-bold mb-14  '>Welcome</h2>

    <div className="fields">
    {!isSignIn && <Input label='Full Name' className='mb-6' value={data.fullName}  onChange={(e)=>setData({
      ...data,
      fullName:e.target.value
    })}/> }
    <form action="">

    <Input label='Email' type='email' className='mb-6' value={data.email} onChange={(e)=>setData({
      ...data,
      email:e.target.value
    })}/>
    <Input label='password' type='password' className='mb-6' value={data.password}  onChange={(e)=>setData({
      ...data,
      password:e.target.value
    })}  /> 
    <Button text={isSignIn ?'Sign in ' :'Signup'} type='submit'  className='inline-block mx-auto'/>

    </form>
    <p className='text-center mt-4'>{isSignIn ? "Don't have an account" :"Already Have an account" } <span className='underline cursor-pointer text-blue-600 '>{isSignIn ?"Singup ": "Sign in"}</span></p>
    </div>
    </div>
  )
}

export default Form