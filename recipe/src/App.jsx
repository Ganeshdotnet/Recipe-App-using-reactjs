import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Details from './pages/details'
import Fav from './pages/fav'
export default function App() {
  return (
    <div className='h-screen w-screen bg-orange-100'>
      <div className='min-h-screen p-6 bg-orange-100 text-gray-600 text-lg'>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/fav' element={<Fav />}>
          </Route>
          <Route path='/recipe-item/:id' element={<Details />}>

          </Route>

        </Routes>
      </div>
    </div>
  )
}
