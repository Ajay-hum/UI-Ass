import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      <div>This is a Contact Page</div>
      <Routes>
        <Route path='/beginning' element={<Beginning/>}/>
        <Route path='/mail' element={<Mail/>}/>
      </Routes>
    </>
  )
}

const Beginning = () => {
  return (
    <div>This is the first page to see in the Contact page</div>
  )
}

const Mail = () => {
  return (
    <div>Contact</div>
  )
}