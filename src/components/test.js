import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';

const Test = () => {
  const { authState, authService } = useOktaAuth();
  const [message, setMessage] = useState();

  const logout = async () => {
    authService.logout('/');
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      const { accessToken } = authState;
      axios
        .get('http://localhost:5000/messages', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => {
          setMessage(res.data.message);
        })
        .catch((err) => err.message);
    }
  }, [authState]);

  return (
    <div>
      <h1>TESTING LOGIN</h1>
      <p>
        If you landed here, then you have successfully logged in with
        Okta!!
      </p>
      <p style={{ color: 'blue', fontSize: '32px' }}>
        Message: {`${message}`}
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Test;
