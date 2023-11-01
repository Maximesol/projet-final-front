import './App.css'
import HomePage from './components/pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
import ErrorPage from './components/pages/ErrorPage';

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  )
}

export default App
