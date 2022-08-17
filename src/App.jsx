import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navigation from './components/navigation/navigation'
import Login from './auth/Login'
import HomeUsers from './components/pages/users/HomeUsers/homeUsers'
import UserList from './components/pages/users/userList/userList'
import Home from './components/pages/home/home'
import './App.scss'
import Register from "./auth/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='/' element={<Navigation/>} >
            <Route path='/home' element={<Home/>}/> 
            <Route path='/users' element={<UserList/>}/> 
            <Route path="/add" element={<HomeUsers />} />
            <Route path="/edit/:id" element={<HomeUsers />} />            {/* {RUTA POR DEFECTO NOT FOUND 404} */}
            <Route path="*" element={<Navigate replace to={"/"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
