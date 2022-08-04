import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navigation from './components/navigation/navigation'
import Test1 from './components/test1/test1'
import Test2 from './components/test1/test2'
import './App.scss'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation/>} >
            <Route path='/test1' element={<Test1/>}/> 
            <Route path='/test1' element={<Test1/>}/> 
            <Route path='/test2' element={<Test2/>}/> 
            {/* {RUTA POR DEFECTO NOT FOUND 404} */}
            <Route path='*' element={<Navigate replace to={'/'}/>}/> 
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
