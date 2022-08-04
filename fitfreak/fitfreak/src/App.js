import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Octive from './components/Octive';
import TrainerPage from './components/TrainerPage';


export default function App() {
  return (
    <div><Navbar></Navbar><Octive></Octive> <TrainerPage></TrainerPage></div>
   
  )
}
