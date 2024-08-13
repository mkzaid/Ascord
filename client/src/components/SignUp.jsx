import React, { useState } from 'react'
import { FormControl, FormLabel, VStack , Input, InputGroup, InputRightElement, IconButton , Button} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignUp = () => {
   
    const [ showPassword, setPasswordShow ] = useState(true)
    const [ showConfirmPassword, setConfirmPasswordShow ] = useState(true)
    const [ name , setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ confirmPassword, setConfirmPassword ] = useState()
    const [ picture , setPicture ] = useState()
    const [allSignUpData, setSignUpData] = useState({})

    const handleSignUp = ()=>{
        setSignUpData({
            name,
            email,
            password,
            confirmPassword,
            picture,
            allSignUpData
        })
        console.log(allSignUpData);
    }
    
  return (
    <VStack spacing={'5px'} >
        <FormControl id='name' isRequired >
            <FormLabel >Name</FormLabel>
            <Input placeholder='Enter Your name' onChange={(e)=>setName(e.target.value)}  />
        </FormControl>
        <FormControl id='email' isRequired >
            <FormLabel >Email</FormLabel>
            <Input placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}  />
        </FormControl>
        <FormControl id='password' isRequired >
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
        <FormControl id='conf-password' isRequired >
            <FormLabel >Confirm Password</FormLabel>
            <InputGroup>
            <Input placeholder='Enter Your Password' type={showConfirmPassword?'password':'text'}  onChange={(e)=>setConfirmPassword(e.target.value)}  />
            <InputRightElement width='4.5rem' >

            <IconButton
          variant="link" color={'white'}
          aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
          onClick={() => setConfirmPasswordShow(!showConfirmPassword)}
        />
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id='picture'>
            <FormLabel >Picture</FormLabel>
            <Input type='file' border={'none'} accept='image/*'  onChange={(e)=>setPicture(e.target.files[0])}  />
        </FormControl>
        <Button 
        width={'100%'}
        colorScheme='blue'
        mt={'15px'}
        onClick={handleSignUp}
        >
            Sign Up
        </Button>
    </VStack>
  )
}

export default SignUp