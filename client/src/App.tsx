import { Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

const App = () => {
  const isLoggedIn = false;

  return (
    <Routes>
      <Route path="/:profileId" element={<Profile />} />
      <Route path="/" element={isLoggedIn ? <Feed /> : <Login />} />
    </Routes>
  );
};

export default App;
