import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

function App() {
  const [category, setCategory] = useState("world");
  return (
   <div>
    <Navbar setCategory={setCategory} category={category}/>
    <NewsBoard category={category}/>
    
   </div>
  )
}

export default App
