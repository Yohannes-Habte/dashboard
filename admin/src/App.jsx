import React, { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './views/homePage/Home';
import Login from './views/loginPage/Login';
import Singlepage from './views/singlePage/Singlepage';
import Newpage from './views/newPage/Newpage';
import List from './views/listPage/List';
import { productInputs, userInputs } from './data/DataFormSource';
import './styles/BgColor.scss';
import { DarkContext } from './context/backgroundColor/DarkBgProvider';
import { UserContext } from './context/UserAuth/UserAuthProvider';

const App = () => {
  // Global state variable
  const { darkMode } = useContext(DarkContext);
  const { currentUser } = useContext(UserContext)

  // How to protect route or routes
  const Protected = ({ children }) => {
    return currentUser ? children : <Navigate to={'/login'} />;
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <Routes>
          <Route path="/">
            {/* //! Nested Routes */}
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />

            {/* //! User Route */}
            <Route path="users">
              {/* Further Nested Routes */}
              <Route
                index
                element={
                  <Protected>
                    <List />
                  </Protected>
                }
              />
              <Route
                path=":userId"
                element={
                  <Protected>
                    <Singlepage />
                  </Protected>
                }
              />
              <Route
                path="newpage"
                element={
                  <Protected>
                    <Newpage inputs={userInputs} title={'Add New User'} />
                  </Protected>
                }
              />
            </Route>
            {/* //! Product Route */}
            <Route path="products">
              {/* Further Nested Routes */}
              <Route
                index
                element={
                  <Protected>
                    <List />
                  </Protected>
                }
              />
              <Route
                path=":productId"
                element={
                  <Protected>
                    <Singlepage />
                  </Protected>
                }
              />
              <Route
                path="newpage"
                element={
                  <Protected>
                    <Newpage inputs={productInputs} title={'Add New Product'} />
                  </Protected>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
