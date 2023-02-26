import './App.css';
import Board from './components/board';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Kanban-dashboard" element={<Board />} exact />         
      </Routes>
    </Router>
    </>
  );
}

export default App;
