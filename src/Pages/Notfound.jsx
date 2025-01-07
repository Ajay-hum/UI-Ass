import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div>This page does not exist, <Link to="/">Go Home</Link></div>
  )
}
