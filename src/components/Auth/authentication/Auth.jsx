import { useEffect, useState } from "react";
import "./Auth.css";
import { assets } from '../../../Assets/assets';
import { useNavigate } from "react-router-dom";
function Auth() {

  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [country,setCountry] = useState("");
  const navigate = useNavigate();


  async function register(e) {
    e.preventDefault();
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      city: "city",
      state: "state",
      country: "country",
    };
    const result = await fetch(`https://localhost:7135/api/Auth/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await result.json();
    if (result.status === 200) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      localStorage.setItem("user-info", JSON.stringify(response));
      navigate("/");
    }
  }
  function login()
  {
    const data = {email:email,password:password}
    console.log("login",data);
  }
  const [currentState, setCurrentState] = useState("login");
  return (
    <>

    <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title "><h2>{currentState}</h2>
            
          </div>
          <div className="login-popup-input ">
            {currentState === "login" ? <></>:<>
            <input type="text" placeholder="first name" value={firstname} onChange={(e)=> setFirstName(e.target.value)} required />
            <input type="text" placeholder="last name"  value={lastname} onChange={(e)=> setLastName(e.target.value)} required /></>}
            
            <input type="email" placeholder="your email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
            <input type="text" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
          </div>
          <button className="btn" type="button" onClick={currentState === "login" ?  login: register}>{currentState === "login" ?  "login" : "create account"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By coutinuing i am agreeing to term and policy </p>
          </div>
          {
            currentState === "login"? (
              <p onClick={()=>setCurrentState("sign up")}>create new account? <span>Register Here</span></p>
            ) : (
              <p onClick={()=>setCurrentState("login")}>already have an account? <span>Login here</span></p>
            )
          }
          
        </form>
    </div>   
      
    </>
  );
}
export default Auth;
