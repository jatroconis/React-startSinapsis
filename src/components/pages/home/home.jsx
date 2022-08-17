import React from 'react'
//import "./home.scss"

const Home = () => {
  return (
    <div className='home-app'>
        <button onClick={() => alert("Juanse Maricon")} className='btn btn-primary' >PRUEBA</button>
        <Alert severity="error">This is an error alert — check it out!</Alert>
    </div>
  )
}

export default Home