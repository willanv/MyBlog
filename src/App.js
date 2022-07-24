import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Work from './Blog/Work'
import Home from './Blog/Home'
import About from './Blog/About'
import * as S from './Blog/Style'

export default function App() {
  return (
    <><S.GlobalStyle/>
    <Router>
      <S.Nav>
        <S.List>
          <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link>
          <Link to='/About' style={{ textDecoration: 'none' }}><li>About</li></Link>
          <Link to='/Work' style={{ textDecoration: 'none' }}><li>Work</li></Link>
        </S.List>
      </S.Nav>
      <Routes> 
        <Route path='/Work' element={<Work/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}