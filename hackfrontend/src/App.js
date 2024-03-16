import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './MYComponents/SignUp';
import SignIn from './MYComponents/SignIn';
import Home from './MYComponents/Home';
import Header from './MYComponents/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
     </Routes>
    </Router>
          Learn React
  
    </div>
  );
}

export default App;
