import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form>
        <p>Login</p>
        <label>
          <span>Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <button onClick={handleClick} type="button">
          Done
        </button>
      </form>
    </div>
  );
};
