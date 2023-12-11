import React from 'react'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Write from './components/post/Write'
import List from './components/post/List'
import Detail from './components/post/Detail'
import Modify from './components/post/Modify'
import Footer from './components/layout/Footer'
import Login from './components/user/Login'
import Join from './components/user/Join'



const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/write' element={<Write />} />
          <Route path='/list' element={<List />} />
          <Route path='/detail/:postNum' element={<Detail />} />
          <Route path='/modify/:postNum' element={<Modify />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Join' element={<Join />} />
        </Routes>
      </Main>
      <Footer />
    </>

  )
}

export default App
