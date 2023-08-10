import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Input, Button, Text, Link as ChakraLink, Heading } from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button'

const Login = () => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log('Logged in with Google', result.user);
            navigate('/');
        } catch (error) {
            console.error('Google login error', error);
        }
    };

    return (
        <Container display="flex" justifyContent="center" alignItems="center" h="100vh">
            <Box>
            <Heading as="h2" mb="3">Login</Heading>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    mb="3"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mb="3"
                />
                
                <GoogleButton w='full' colorScheme="red" onClick={handleGoogleLogin} ml={3}></GoogleButton>
                <Text mt="3">
                    Don't have an account? <ChakraLink as={Link} to="/signup">Sign Up</ChakraLink>
                </Text>
            </Box>
        </Container>
    );
};

export default Login;
