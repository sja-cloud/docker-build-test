import React from 'react'
import { useState, useEffect } from 'react'

export default function Input({search, setSearch}) {
  
    

  const handleChange = (e) => {
      setSearch(e.target.value)
  }
  
    return (
    <div className='App'>

    <input 
    placeholder='search...' 
    value={search}
    onChange={handleChange}
    />


{search}
   

    </div>
  )
}
