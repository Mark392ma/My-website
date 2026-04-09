import React, { useState } from 'react';
import LogoutNavbar from './LogoutNavbar';
import LoginNavbar from './LoginNavbar';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    //Login logic (e.g., API call, auth library, etc.)
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <LoginNavbar />;
  } else {
    return <LogoutNavbar onLogin={handleLogin} />;
  }
};

export default Navbar;



