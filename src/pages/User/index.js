import './User.scss';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../../components/User/Header';
import Menu from '../../components/User/Menu';
import Searcher from '../../components/User/Searcher';

const User = () => {
  let location = useLocation();

  // Redirect if token not exists
  const token = localStorage.getItem('TOKEN');
  if (!token) return <Navigate to="/" />

  return (
    <div className="user">
      <Header />
      <div className="user__container">
        {location.pathname === "/user" && <Menu />}
        <Routes>
          <Route path="/searcher" element={<Searcher />} />
        </Routes>
      </div>
    </div>
  );
};

export default User;
