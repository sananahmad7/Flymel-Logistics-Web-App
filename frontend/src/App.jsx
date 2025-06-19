import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import GlobalCoverage from './pages/GlobalCoverage'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/global" element={<GlobalCoverage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
