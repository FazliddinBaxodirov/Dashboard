import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Agents, Article, Contacts, Ideas, NotFound, Overview, Tickets } from '../pages'

export default function Customroute() {
  return (
    <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='/ideas' element={<Ideas/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
