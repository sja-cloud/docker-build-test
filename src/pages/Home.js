import React from 'react'
import {useState} from 'react'
import Input from '../components/Input'
import Products from '../components/Products'

export default function Home() {
    
    const [search, setSearch]= useState('');
    
    
    return (
        <div>
            <Input search={search} setSearch={setSearch}  />
            <Products search={search} handleChange={setSearch} />
        </div>
    )
}