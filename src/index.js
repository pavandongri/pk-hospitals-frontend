import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/pages/Home';
import Cardiology from './components/pages/Cardiology';
import Radiology from './components/pages/Radiology';
import Ambulance from './components/pages/Ambulance';
import Laboratory from './components/pages/Laboratory';
import Managers from './components/pages/Managers';
import Doctors from './components/pages/Doctors';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path="/lab" exact element={<Laboratory/>} />
            <Route path="/ambulance" exact element={<Ambulance/>} />

            <Route path="/cardiology" exact element={<Cardiology/>} />
            <Route path="/radiology" exact element={<Radiology/>} />

            <Route path="/managers" exact element={<Managers/>} />
            <Route path="/doctors" exact element={<Doctors/>} />

            <Route path="/contactUs" exact element={<ContactUs/>} />

            <Route path="/sign-up" exact element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
);

