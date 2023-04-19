import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import ExerciseDetail from "./Pages/ExerciseDetail";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

const App = () => (
    <>
        <Box
            width="400px">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<ExerciseDetail />} />
            </Routes>
        </Box>
    </>
);

export default App;
