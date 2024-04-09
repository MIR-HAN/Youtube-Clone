import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Header from './components/Header'
import VideoDetails from './pages/VideoDetail/index'
import Results from './pages/Results'
import Undefined from './pages/Undefined'


const App = () => {
  return (
    <BrowserRouter>

    <Header/>
      <Routes>

        <Route path='/' element={<Feed/>}/>
        <Route path='/watch' element={<VideoDetails/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='*' element={<Undefined/>}/>

      </Routes>
    </BrowserRouter>

  )
}

export default App