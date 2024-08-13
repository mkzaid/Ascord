import React, { useState } from 'react'
import { FormControl, FormLabel, VStack , Input, InputGroup, InputRightElement, IconButton , Button} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LogIn = () => {
  const [ showPassword, setPasswordShow ] = useState(true)
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  const handleLogIn = ()=>{

  }

  return (
    <VStack spacing={'5px'} >
        <FormControl id='email-login' isRequired >
            <FormLabel >Email</FormLabel>
            <Input placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}  />
        </FormControl>
        <FormControl id='password-login' isRequired >
            <FormLabel >Password</FormLabel>
            <InputGroup>
            <Input placeholder='Enter Your Password' type={showPassword?'password':'text'}  onChange={(e)=>setPassword(e.target.value)}  />
            <InputRightElement width='4.5rem' >

            <IconButton
          variant="link" color={'white'}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
          onClick={() => setPasswordShow(!showPassword)}
        />
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button 
        width={'100%'}
        colorScheme='blue'
        mt={'15px'}
        onClick={handleLogIn}
        >
            Log In
        </Button>
        <Button 
        width={'100%'}
        colorScheme='red'
        mt={'15px'}
        onClick={()=>{
          setEmail('guest@gmail.com')
          setPassword('12345678')
        }}
        >
            Get guest user credentials
        </Button>
    </VStack>
  )
}

export default LogIn