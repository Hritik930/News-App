import React from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './Components/Footer';

const App = () => {

const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </div>
  )
}

export default App

