import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
        <div>
            <Navbar/>
        </div>
        <div>
            <Hero/>
        </div>
    </div>
  )
}

export default App