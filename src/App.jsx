import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './Pages/startGame'
import PlayGame from './Pages/playGame'
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
