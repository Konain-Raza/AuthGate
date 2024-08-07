import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from "./Components/Form/Form"
import loginimg from "../public/Assets/Images/login-img.png"
import icon from "../public/Assets/Images/icon.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div id="main">
  <div id="left-content">
    <div id="logo"><img src={icon} alt="" /> <span id='name'>Auth Gate</span></div>
    <img src={loginimg} alt="" /></div>
  <div id="right-content"><Form/></div>
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
</div>
  )
}

export default App
