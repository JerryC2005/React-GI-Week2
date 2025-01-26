import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
import MovieSearch from './pages/MovieSearch.jsx'
import NotesApp from './pages/NotesApp.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>

    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>    
        <Route path='/movie-search' element={<MovieSearch/>}/>
        <Route path='/notes-app' element={<NotesApp/>}/>
      </Routes>
    </div>
    
      
    </>
        
  )
}

export default App
