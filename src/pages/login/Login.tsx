import { useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const buttonSubmitRef = useRef<HTMLButtonElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form>
        <p>Login</p>

        <InputLogin
          label="Email"
          type="email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label="Password"
          type="password"
          value={password}
          onChange={(newValue) => setPassword(newValue)}
          onPressEnter={() => buttonSubmitRef.current?.focus()}
        />

        <button ref={buttonSubmitRef} onClick={handleClick} type="button">
          Done
        </button>
      </form>
    </div>
  );
};
