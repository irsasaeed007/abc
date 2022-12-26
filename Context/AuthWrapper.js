import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function WrapperAuth({ children }) {

  const [token,setToken]=useState('asdaasd')
  return (
    <AuthContext.Provider value={{token,setToken}}>
      {children}
    </AuthContext.Provider>
  );
}

 export const useAuthContext = () => useContext(AuthContext);