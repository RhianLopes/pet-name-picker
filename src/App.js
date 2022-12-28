import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { PetQuestion } from './pages'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/pet-name-picker' element={<PetQuestion />} />
          <Route path='*' element={<Navigate to='/pet-name-picker' replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
