import { HashRouter } from 'react-router-dom';
import './App.css';
// Import customizer hook:
// import useCustomizer from "./hooks/useCustomizer";

// Import Components
import Navbar from './components/Navbar';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  // const {bgColor, fontFamily, navColor, footerColor} = useCustomizer();

  // useEffect(() => {
  //   // Apply the background color to the body:
  //   document.body.style.backgroundColor = `#${bgColor}`
  //   // Change font based on selection returned from the API
  //   if (fontFamily === 'Arial') {
  //     document.body.style.fontFamily = `'Arial', sans-serif`;
  //   }
  //   if (fontFamily === 'Roboto') {
  //     document.body.style.fontFamily = `'Roboto', sans-serif`;
  //   }
  //   if (fontFamily === 'Poppins') {
  //     document.body.style.fontFamily = `'Poppins', sans-serif`;
  //   }

  //   document.querySelector('nav').style.backgroundColor = navColor;
  //   document.querySelector('footer').style.backgroundColor = footerColor;
    
  // }, [bgColor, fontFamily, navColor, footerColor])

  return (
    <HashRouter>
      <Navbar/>
      <Links/>
      <Footer/>
    </HashRouter>
  );
};

export default App
