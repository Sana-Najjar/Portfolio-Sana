import React, {useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [state, setState] = useState("fr");
  console.log(state)

  return (
    <div>
       <Navbar onChangeLocale={(locale) => setState(locale)}/>
       <Header/>
       <About/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App