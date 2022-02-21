import './Login.scss';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Form from '../../components/Login/Form';
import Spinner from '../../components/Login/Spinner';

const Login = () => {
  const [loading, setLoading] = useState(false);

  // Redirect if token exists 
  const token = localStorage.getItem('TOKEN');
  if (token) return <Navigate to="/user" />

  return (
    <div className="login">
      <div className="login__containerForm">
        <h1 className="login__containerForm-title">Menú<span>App</span></h1>
        {loading
          ? <Spinner loading={loading} />
          : <Form setLoading={setLoading} />
        }
      </div>
    </div>
  );
};

export default Login;
