import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import TodoPage from './pages/TodoPage';
function App() {


  return (
    <Router>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route  path='/users' element={<UsersPage />} />
        <Route  path='/todos' element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
