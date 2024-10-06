import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './Pages/StartGame'
import PlayGame from './Pages/PlayGame'
import Home from './Pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
      </Routes>
    </div>
  )
}

export default App
