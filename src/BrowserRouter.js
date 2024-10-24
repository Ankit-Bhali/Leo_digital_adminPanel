import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './SignIn'
import Home from './App'

const BrowserRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/Home" element={<Home />}>


                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default BrowserRouters