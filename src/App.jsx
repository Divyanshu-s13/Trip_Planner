
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Mainfile from './components/Mainfile'
import Signup from './components/Signup'
import Questionnaire from './components/Questionnaire'
import Itinerary from './components/Itinerary';
import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Mainfile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/questionnaire" element={<Questionnaire/>}/>
        <Route path="/itinerary" element={<Itinerary />} />
    </Routes>
    </>
  )
}

export default App
