import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Box, Spinner } from '@chakra-ui/react';

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false); // Mark loading as complete
    });

    return () => unsubscribe();
  }, [auth]);

  if (isLoading) {
    // You might want to show a loading spinner or some other loading indicator
    return <Box display="flex" justifyContent="center" ht="100"><Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      mt='150'
    /></Box>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
