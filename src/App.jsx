<<<<<<< HEAD
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navigation from './components/navigation/navigation'
import Login from './auth/Login'
import HomeUsers from './components/pages/users/HomeUsers/homeUsers'
import UserList from './components/pages/users/userList/userList'
import Home from './components/pages/home/home'
import './App.scss'
=======
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Test1 from "./components/test1/test1";
import Test2 from "./components/test1/test2";
import Login from "./auth/Login";
import "./App.scss";
import Register from "./auth/Register";
>>>>>>> fbe133f010a62e2c7743a17d2ec2a545b7195d09

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='login' element={<Login/>}/>
          <Route path='/' element={<Navigation/>} >
            <Route path='/home' element={<Home/>}/> 
            <Route path='/users' element={<UserList/>}/> 
            <Route path="/add" element={<HomeUsers />} />
            <Route path="/edit/:id" element={<HomeUsers />} />
=======
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Navigation />}>
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
>>>>>>> fbe133f010a62e2c7743a17d2ec2a545b7195d09
            {/* {RUTA POR DEFECTO NOT FOUND 404} */}
            <Route path="*" element={<Navigate replace to={"/"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
