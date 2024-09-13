// Hooks
import React, { useState } from 'react'

// Design
import { Card, CardBody, Typography, Button, Input } from '@material-tailwind/react'
import toast, {Toaster} from 'react-hot-toast'

// Fetching
import axios from 'axios'


const Home = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const handleSubmit = async(e) => {
    e.preventDefault()

    // console.log(name, password)

    const loginData = {
      email, 
      password
    }
    
    try {
      const res = await axios.post(`${import.meta.env.VITE_LOCAL_API_URL}/login`, loginData);
      console.log(res)
      // console.log(loginData)
      if(res.status === 200){
        toast.success('Logged In Successfully')
      }
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <>
      <Card shadow={false} className='flex flex-col justify-center items-center mt-5'>
        <Toaster />
        <Typography variant='h3' color='black'>Sign In</Typography>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div>
              <Typography>Email</Typography>
              <Input
                size="lg"
                type='email'
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
                size="lg"
                type='password'
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
              <a href="/register" className='text-blue-900 justify-end flex'>Don't have an Account?</a>
            </div>
            <div className='flex mt-3 justify-center items-center'>
              <Button type='submit'>Sign in</Button>
            </div>
          </form>
        </CardBody>
      </Card> 
    
    
    
    </>
  )
}

export default Home
