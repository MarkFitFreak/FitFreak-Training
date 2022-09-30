import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Octive from './components/Octive';
import Intro from './components/Intro';
import TrainerPage from './components/TrainerPage';

export default function App() {
  return (
    <><div><Navbar></Navbar><Intro></Intro><Octive></Octive></div><div><Navbar></Navbar><Octive></Octive> <TrainerPage></TrainerPage></div></>
  )}
