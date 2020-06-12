import React from 'react'
import {Button} from "@material-ui/core";
import { useOktaAuth } from '@okta/okta-react';

const Nav = () => {
  const { authState, authService } = useOktaAuth();

  const logout = async () => {
    localStorage.clear();
    authService.logout('/');
  };

  return (
    <div>
      <Button color='secondary' variant='contained' onClick={logout}>
              Logout <br/><br/><br/>
      </Button>
    </div>
  )
}

export default Nav
