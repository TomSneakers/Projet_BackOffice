import { useState } from "react";

export function LoginForm({onSubmit}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(username, password);
      }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
    );
}