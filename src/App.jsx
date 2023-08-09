import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home/Home'
import Gallery from './components/pages/Gallery/Gallery'
import PaintingDetails from './components/shared/PaintingDetails/PaintingDetails'

function App() {

  return (
    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/painting/:id' element={<PaintingDetails/>}/>
    </Routes>
    </main>
  )
}

export default App
