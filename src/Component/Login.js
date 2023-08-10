import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Input, Button, Text, Link as ChakraLink, Heading } from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isMounted, setIsMounted] = useState(true); // Flag to track component mount status

    useEffect(() => {
        setIsMounted(true); // Component has mounted
        return () => {
            setIsMounted(false); // Component will unmount
        };
    }, []);

    const handleLogin = async () => {
        try {
            if (!isMounted) return; // Check if component is still mounted
            await auth.signInWithEmailAndPassword(email, password);
            console.log('Logged in successfully');
            navigate('/');
        } catch (error) {
            console.error('Login error', error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            if (!isMounted) return; // Check if component is still mounted
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            console.log('Logged in with Google');
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
                <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
                <Button colorScheme="red" onClick={handleGoogleLogin} ml={3}>Login with Google</Button>
                <Text mt="3">
                    Don't have an account? <ChakraLink as={Link} to="/signup">Sign Up</ChakraLink>
                </Text>
            </Box>
        </Container>
    );
};

export default Login;
