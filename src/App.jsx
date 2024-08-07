import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "../Store.js";
import Form from "./Components/Form/Form";
import loginimg from "../public/Assets/Images/login-img.png";
import signupimg from "../public/Assets/Images/signup-img.png";
import icon from "../public/Assets/Images/icon.png";
import "./App.css";

function App() {
  const { formname } = useStore(state => ({
    formname: state.formname
  }));

  const [currentImage, setCurrentImage] = useState(formname === "login" ? loginimg : signupimg);

  useEffect(() => {
    console.log(formname)
    setCurrentImage(formname === "login" ? loginimg : signupimg);
  }, [formname]);

  return (
    <div id="main">
      <div id="left-content">
        <div id="logo">
          <img src={icon} alt="" /> <span id="name">Auth Gate</span>
        </div>
        <img 
          src={currentImage} 
          alt={formname === "login" ? "Login Image" : "Signup Image"} 
        />
      </div>
      <Form />
      <ToastContainer />
    </div>
  );
}

export default App;
