import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React,{useEffect,useState} from 'react';
import SignIn from './MYComponents/SignIn';
import Home from './MYComponents/Home';
import Header from './MYComponents/Header';
import GetUser from './MYComponents/getuser';
import AddUser from './MYComponents/adduser';
import LogsList from './MYComponents/Loglist';
import AddLogs from './MYComponents/AddLogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './MYComponents/Navbar';
import DateTime from './MYComponents/DateTime';

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
        <Route path='/loglist' element={<LogsList/>}/>
        <Route path='/AddLogs' element={<AddLogs/>}/>
        <Route path='/nav' element={<Navbar/>}/>
        <Route path='/DateTime' element={<DateTime/>}/>




     </Routes>
    </Router>
          
  
    </div>
  );
}

export default App;
