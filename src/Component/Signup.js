import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Import only 'auth' from firebaseConfig
import { Container, Box, Heading, Input, Button, Text, Link as ChakraLink } from '@chakra-ui/react';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); 


    const handleGoogleSignup = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            await signInWithPopup(auth, googleProvider);
            console.log('User signed up with Google');
            navigate('/'); 
            console.log('After navigate');
        } catch (error) {
            console.error('Google signup error', error);
            setError(error.message); 
        }
    };
    return (
        <Container display="flex" justifyContent="center" alignItems="center" h="100vh">
            <Box>
                <Heading as="h2" mb="3">Sign Up</Heading>
                {error && <Text color="red">{error}</Text>} 

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
               
                <Button colorScheme="red" onClick={handleGoogleSignup} ml={3}>Sign Up with Google</Button>
                <Text mt="3">
                    Already have an account? <ChakraLink as={Link} to="/login">Log In</ChakraLink>
                </Text>
            </Box>
        </Container>
    );
};

export default Signup;
