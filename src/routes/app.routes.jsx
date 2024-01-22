import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { NewMovie } from '../pages/NewMovie'
import { MovieDescription } from '../pages/MovieDescription'
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<NewMovie/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/description/:id" element={<MovieDescription/>}/>
    </Routes>
  )
}