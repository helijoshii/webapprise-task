
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Tables from './components/Tables';

const isAuthenticated = () => {
  // Replace with actual logic to check for an access token
  return localStorage.getItem('accessToken') !== null;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/tables' element={<Tables />} />
      </Routes>
    </Router>
  );
}
