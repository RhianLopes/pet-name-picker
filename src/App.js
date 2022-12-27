import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PetQuestion } from './pages'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<PetQuestion/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
