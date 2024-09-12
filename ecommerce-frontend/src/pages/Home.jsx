import React from 'react'
import { Card, CardBody, Typography, Button, Input } from '@material-tailwind/react'


const Home = () => {
  return (
    <>
      <Card shadow={false} className='flex flex-col justify-center items-center mt-5'>
        <Typography variant='h3' color='black'>Sign In</Typography>
        <CardBody>
          <form>
            <div>
              <Typography>Email</Typography>
              <Input
                size="lg"
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
              <Button>Sign in</Button>
            </div>
          </form>
        </CardBody>
      </Card> 
    
    
    
    </>
  )
}

export default Home
