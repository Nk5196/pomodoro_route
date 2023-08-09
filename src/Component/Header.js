import React from 'react'
import { Heading, Flex, Spacer, Box, Show } from '@chakra-ui/react'

import { BiSolidUser } from 'react-icons/bi';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            console.log('Logged out successfully');
            navigate('/login');
        } catch (error) {
            console.error('Logout error', error);
        }
    };

    return (
        <Box>
            <Flex p={4} color={'white'}>
                <Box><IoTimer size='30px' /></Box><Spacer />
                <Heading as='h4' size='md' fontWeight={'semibold'}>
                    Pomodoro
                </Heading>
                <Spacer />
                <Flex> <Box mt={'0px'} mr={2} p={1}><BiSolidUser size='20px' /> </Box> <Spacer /><Show above='md'><Heading size='md' fontWeight={'semibold'} > Login</Heading></Show></Flex>
            </Flex>
        </Box>
    );
};

export default Header;
