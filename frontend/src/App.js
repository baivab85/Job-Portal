import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import Posting from './components/Posting';
import Main from './components/Main';
import ViewJob from './components/ViewStudent';
import LoginForm from './components/Registration';
import SearchJob from './components/Jobi';
import AdminLogin from './components/Registration';
import UserLogin from './components/User';
import Form from './components/UserRegistration';
import EditStudent from './components/EditStudent';
import Form1 from './components/Userprofile';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route exact path='/' element={< Menu/>}></Route>
         <Route exact path='/About' element={<About />}></Route>
         <Route exact path='/Posting' element={<Posting/>}></Route>
         <Route exact path='/Main' element={<Main/>}></Route> 
         <Route exact path='/ViewJob' element={<ViewJob/>}></Route> 
         <Route exact path='/LoginForm' element={<LoginForm/>}></Route> 
         <Route exact path='/SearchJob' element={<SearchJob/>}></Route> 
         <Route exact path='/AdminLogin' element={<AdminLogin/>}></Route> 
         <Route exact path='/UserLogin' element={<UserLogin/>}></Route> 
         <Route exact path='/Form' element={<Form/>}></Route> 
         <Route exact path='/EditStudent/:id' element={<EditStudent/>}></Route> 
         <Route exact path='/Form1' element={<Form1/>}></Route> 
         
        </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
