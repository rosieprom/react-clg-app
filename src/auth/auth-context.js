import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  name: "",
  email: "",
  onLogin: () => {},
  onLogout: () => {}
});

export default AuthContext;
