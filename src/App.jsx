import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './Pages/StartGame'
import PlayGame from './Pages/playGame'
import Home from './Pages/Home'
import { WordContext } from './Context/WordContext'
import { useState } from 'react'
function App() {

  const [wordList,setwordList]=useState([]);

  const [word,setword]=useState('');

  const [hint,sethint]=useState('');


  return (
    <WordContext.Provider value={{wordList,setwordList,word,setword,hint,sethint}}>
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
      </Routes>
    </div>
    </WordContext.Provider>
  )
}

export default App
