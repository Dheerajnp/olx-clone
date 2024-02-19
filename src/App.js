import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import SignupPage from './Pages/Signup';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import Create from './Components/Create/Create';
import ViewPost from './Pages/ViewPost';
import { isLoggedIn } from './firebase/firebaseFunctions';

function App() {
  const PrivateRoute = ({ ifSession, notSession }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const checkAuthentication = async () => {
        const result = await isLoggedIn();
        setUserData(result);
      };

      checkAuthentication();
    }, []);

    return userData === null ? null : userData ? ifSession : notSession;
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute ifSession={<Home />} notSession={<Navigate to="/login" />} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<PrivateRoute ifSession={<Navigate to="/" />} notSession={<LoginPage />} />} />
          <Route path="/create" element={<Create />} />
          <Route path='/viewPost' element={<ViewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
