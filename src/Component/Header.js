import React, { useEffect, useState } from 'react';
import { Heading, Flex, Spacer, Box, Show, Button } from '@chakra-ui/react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IoTimer } from 'react-icons/io5';
import { auth } from '../firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BiSolidUser } from 'react-icons/bi';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
const Header = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        // Clean up the observer when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            console.log('Logged out successfully');
            <Navigate to='/login' />;
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
                <Flex>
                   
                    <Spacer />
                    <Show above='sm'>
                       
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton isActive={isOpen} as={Button} backgroundColor='black' _hover='none' mt={0} >
                                    <BiSolidUser color='white' />
                                    </MenuButton>
                                    {user &&  <MenuList backgroundColor='black' >
                                        
                                        <MenuItem backgroundColor='black'  onClick={handleLogout}>{user && `Logout - ${user.displayName}` }</MenuItem>
                                    </MenuList>}
                                   
                                </>
                            )}
                        </Menu>
                    </Show>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
