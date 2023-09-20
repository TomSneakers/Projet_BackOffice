import { createContext, useContext, useState } from "react";
import { LoginForm } from "./loginForm";

const connectUserContet = createContext();

export function useConnectUser() {
  return useContext(connectUserContet);
}

export function ConnectUserProvider({ children }) {
  const [isUserConnected, setConnectedUser] = useState(false);

  function tryConnect(username, password) {
    if (username === "admin" && password === "admin") {
      setConnectedUser(true);
    } else {
      alert("Mauvais identifiant ou mot de passe");
    }
  }

  return (
    <connectUserContet.Provider>
      {isUserConnected ? children : <LoginForm onSubmit={tryConnect}/>}
    </connectUserContet.Provider>
  );
}
