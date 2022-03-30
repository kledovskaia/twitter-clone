import { Routes, Route, Navigate } from 'react-router-dom';
import Feed from './containers/Feed/Feed';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Messages from './pages/Messages/Messages';
import Notifications from './pages/Notifications/Notifications';
import Profile from './pages/Profile/Profile';

const App = () => {
  const isLoggedIn = true;

  if (isLoggedIn)
    return (
      <Feed>
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:profileId" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Feed>
    );

  return (
    <Routes>
      <Route
        path="/:profileId"
        element={
          <Feed>
            <Profile />
          </Feed>
        }
      />
      <Route
        path="/explore"
        element={
          <Feed>
            <Explore />
          </Feed>
        }
      />
      <Route path="/messages" element={<Navigate to="/" />} />
      <Route path="/notifications" element={<Navigate to="/" />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
