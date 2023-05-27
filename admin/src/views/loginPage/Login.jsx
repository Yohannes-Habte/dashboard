import React, { useContext, useState } from 'react';
import './Login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserAuth/UserAuthProvider';
import { USER_ACTION } from '../../context/UserAuth/UserReducer';

const Login = () => {
  // navigate
  const navigate = useNavigate();

  // Global state variable
  const { currentUser, dispatch } = useContext(UserContext);
  // Local state variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Handle on change input
  const handleChangeInput = (e) => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  // Submit login
  const handleSubmit = async (e) => {
    e.pereventDefault();
    try {
      // New User
      const newUser = {
        username: username,
        password: password,
      };
      // Settings
      const { data } = await axios.post(
        process.env.REACT_APP_SERVER_URL + `/api/users/login`,
        newUser
      );
      dispatch({ type: USER_ACTION.LOGIN, payload: data.otherDetails });
      navigate('/');
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <main className="login-page">
      <section className="login-container">
        <h1 className="title">Login Account</h1>
        <form onSubmit={handleSubmit} action="" className="login-form">
          <div className="form-input">
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleChangeInput}
              placeholder="Enter Username"
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChangeInput}
              placeholder="Enter Password"
            />
          </div>
          <div className="form-input">
            <button className="login-btn"> Login </button>
          </div>
          <div className="form-input">
            {error && <span className="span"> Wrong email or password </span>}
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
