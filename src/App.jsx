// import { useState } from 'react'
import './App.css'
import Entry from './components/Entry.jsx'
import Header from './components/Header.jsx'
import DataComponents from './data.jsx'

function App() {
  const dataElemnets = DataComponents.map((item)=>{
    return(
      <Entry 
        key={item.id}
        entry= {item} />
    )
  })

  return (
    <>
      <Header />
      {dataElemnets}
    </>
  )
}

export default App
