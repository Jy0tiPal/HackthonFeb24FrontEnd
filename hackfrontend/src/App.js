import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React,{useEffect,useState} from 'react';
import SignIn from './MYComponents/SignIn';
import Home from './MYComponents/Home';
import Header from './MYComponents/Header';
import GetUser from './MYComponents/getuser';
import AddUser from './MYComponents/adduser';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/getu' element={<GetUser/>}/>
        <Route path='/postu' element={<AddUser/>}/>
        <Route path='/signin' element={<SignIn/>}/>
     </Routes>
    </Router>
          Learn React
  
    </div>
  );
}

export default App;
