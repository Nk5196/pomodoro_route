import React from 'react'
import { Heading, Flex, Spacer, Box } from '@chakra-ui/react'

import { BiSolidUser } from 'react-icons/bi';
import { IoTimer } from 'react-icons/io5';
const Header = () => {
    return (
        <Box >
            <Flex p={4} color={'white'} >
                <Box width='100px'><IoTimer  size='30px'/> </Box><Spacer/>
                <Heading as='h4' size='md' fontWeight={'semibold'}>
                    Pomodoro
                </Heading>
                <Spacer />
                <Flex width='100px' > <Box mt={'0px'}  mr={2} p={1}><BiSolidUser size='20px'/> </Box> <Spacer/><Heading size='md'  fontWeight={'semibold'} > Login</Heading></Flex>
            </Flex>
        </Box>

    )
}

export default Header