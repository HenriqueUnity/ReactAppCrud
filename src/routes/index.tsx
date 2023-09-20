import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages";
import { Login } from "../pages";
import { Contact } from "../pages";
import { Counter } from "../pages/app/Counter";

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Dashboard} />
        <Route path="/login" Component={Login} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={Dashboard} />
        <Route path="/counter" Component={Counter} />
      </Routes>
    </BrowserRouter>
  );
};
