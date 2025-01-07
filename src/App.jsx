// import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Notfound from './Pages/Notfound'
import Header from './Pages/Header/Header';

const App=({ someProp }) => {
  return (
    <div>
      <Header/>
    <Routes>
    <Route>
      <Route path='' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Route>
    </Routes>
    </div>
  );
}

export default App;
