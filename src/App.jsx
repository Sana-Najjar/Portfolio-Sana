import React, {useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

const App = () => {
  const [state, setState] = useState("fr");
  console.log(state)

  return (
    <div>
       <Navbar onChangeLocale={(locale) => setState(locale)}/>
       <Header/>
       <About/>
       <Projects/>
    </div>
  )
}

export default App