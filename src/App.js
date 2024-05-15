import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/authentication/Auth";
import Home from "./Page/Home/Home";
import Middleware from "./components/Auth/ProtectedRoute/Middleware";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Middleware element={Home} />} />
          <Route path="/login" element={<Auth/>} />
          <Route path="/logout" element={<Auth/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
