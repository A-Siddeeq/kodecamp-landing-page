import MainPage from './pages/MainPage'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import Nav from './components/Nav'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>

      <BrowserRouter>
      <Nav />
        <Routes>
          <Route index path="/" element={<MainPage/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
