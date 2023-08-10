import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Body from './Component/Body';
import Login from './Component/Login';
import Signup from './Component/Signup';
import ProtectedRoute from './Component/Protected_Route';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box w='100%' h='100vh' bgGradient='linear(to-l, #000103, #07345b)' color='white'>
     
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoute><Body/></ProtectedRoute>} >
            <Route path="/" element={<Body />} />
          </Route>
        </Routes>
     
    </Box>
  );
}

export default App;
