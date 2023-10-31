import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
function App() {
  return (
    <div className='flex flex-col App min-h-screen bg-slate-900'>
      <Header />
			<Dashboard />
			<Footer />
    </div>
  )
}

export default App
