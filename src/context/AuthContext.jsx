import { useState, createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const initialAuth = null;
  const [auth, setAuth] = useState(initialAuth);

  const handlerAuth = (e) => {
    console.log(e.target.value);
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  const data = {auth, handlerAuth  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
