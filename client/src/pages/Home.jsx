import { Box, Container, Text,Tabs, TabList, TabPanels, Tab, TabPanel  } from '@chakra-ui/react'
import React from 'react'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'

const Home = () => {
  return (
    <Container maxW='xl' centerContent >
        <Box
        d='flex' 
        justifyContent={'center'}
        p={3}
        bg={"white"}
        w={'100%'}
        m="40px 0px 15px 0px"
        borderRadius='lg'
        // borderWidth='1px'
        backgroundColor={'#121544'}
        >
            <Text
            fontSize='4xl' textAlign={'center'} fontFamily={'Work sans'} color={'white'}
            >
                Ascord Chat App
            </Text>
        </Box>
        <Box bg={'#121544'} borderRadius={'lg'} w={'100%'} p={4} >
        <Tabs variant='soft-rounded'>
  <TabList mb={'1em'} >
    <Tab width={'50%'} >Log In</Tab>
    <Tab width={'50%'}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel color={'white'} >
      <LogIn/>
    </TabPanel>
    <TabPanel color={'white'} >
      <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
    </Container>
  )
}

export default Home