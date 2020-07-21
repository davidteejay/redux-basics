import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveUser, changeUserType, logout } from '../actions/users'

function App() {
  const dispatch = useDispatch()
  const { userData, userType } = useSelector(state => state.users)

  return (
      <div className="App">
        {(userData && userType) ? (
          <div>
            <h1>{userData.name}</h1>
            <h3>{userType}</h3>
            <h4>{userData.height}</h4>
            <h4>{userData.hairColor}</h4>
          </div>
        ) : (
            <div>
              Not Logged In
            </div>
          )}
      <button onClick={() => dispatch(saveUser())}>Save User</button>
      <button onClick={() => dispatch(changeUserType())}>Change User Type</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
  );
}

export default App;
