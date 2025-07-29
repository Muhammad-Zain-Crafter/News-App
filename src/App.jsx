import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import Footer from './Components/Footer'

function App() {
  const [category, setCategory] = useState("world")

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setCategory={setCategory} category={category} />
      <main className="flex-1">
        <NewsBoard category={category} />
      </main>
      <Footer />
    </div>
  )
}

export default App
