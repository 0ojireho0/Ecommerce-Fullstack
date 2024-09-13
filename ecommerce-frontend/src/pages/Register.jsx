// Hooks
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// Design
import { Card, CardBody, Typography, Button, Input } from '@material-tailwind/react'
import toast, {Toaster} from 'react-hot-toast'

// Fetching
import axios from 'axios'




const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const gotoLogin = () =>{
    navigate('/')
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const signUpData = {
      name,
      email,
      password
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_LOCAL_API_URL}/signup`, signUpData)
      console.log(res?.data)
      if(res?.data === "Success"){
        toast.success('Sign Up Successfully')
        setTimeout(gotoLogin, 2000)
      }
    } catch (error) {
      if(error?.status === 422){
        toast.error('Minimum of 6 letters in password')
      }
    }

  
  }


  return (
    <>
      <Card shadow={false} className='flex flex-col justify-center items-center mt-5'>
        <Toaster />
        <Typography variant='h3' color='black'>Sign Up</Typography>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div>
              <Typography>Name</Typography>
              <Input
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jeremiah Quintano"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-[15rem]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className='mt-3'>
              <Typography>Email</Typography>
              <Input
                type='email'
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-[15rem]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className='mt-3'>
              <Typography>Password</Typography>
              <Input
                type='password'
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-[15rem]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <a href="/" className='text-blue-900 justify-end flex'>Already have an Account?</a>
            </div>
            <div className='flex mt-3 justify-center items-center'>
              <Button type='submit'>Sign Up</Button>
            </div>
          </form>
        </CardBody>
      </Card> 
    
    
    
    </>
  )
}

export default Register
