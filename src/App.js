import { useState } from 'react';
import './App.css';
import qrImg from "./assest/image-qr-code.png"
import { HiOutlineSun } from 'react-icons/hi'
import { IoMdMoon } from "react-icons/io"

function App() {
  const [theme, setTheme] = useState("light")

  const switchTheme = () => {
    if (theme === "light") {
      document.querySelector("body").setAttribute("data-theme", "dark")
      setTheme("dark")
    } else {
      document.querySelector("body").setAttribute("data-theme", "light")
      setTheme('light')
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center  flex-col relative  main-div" >
      <div className='absolute top-5 right-10 btn-div '>
        <button className=' p-2 rounded-3xl btn' onClick={switchTheme}>{theme === "light"? "Dark Mode":"Light Mode"}</button>
      </div>
      <div className=' lg:w-1/4 md:w-1/2 w-5/6  flex justify-center flex-col p-5 rounded-3xl card'>
        <div className='card-img'>
          <img src={qrImg} alt="qr-code" className='w-100 h-100 rounded-2xl' />
        </div>
        <div className='px-3 py-0 card-content'>
          <h1 className='text-xl text-center font-bold py-3'>Imporve your front-end skills by buildings projects</h1>
          <p className='text-center font-normal '>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
      <div className='absolute bottom-2 text-center md:flex gap-2 footer'>
        <p> Challenge by <a href="https://www.frontendmentor.io?ref=challenge"  target="_blank">Frontend Mentor</a>.</p>
        <p>Coded by <a href="/" >Sonali Keshri</a></p>
      </div>
    </div>
  );
}

export default App;
