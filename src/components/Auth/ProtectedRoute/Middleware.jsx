import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Middleware({ element: Component }) {
    const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user-info");
    user == null ? navigate("login"):navigate("/");
  },[navigate]);
  return <Component />;
}
export default Middleware;
