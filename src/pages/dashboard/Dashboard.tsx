import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/login">Login</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/counter">Counter</Link>
    </div>
  );
};
