import { useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./theme";
import ProjectImages from "./components/ProjectImages";
import Footer from "./components/Footer";
import { Css } from "@mui/icons-material";
import { Experimental_CssVarsProvider } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [brenty, setBrenty] = useState(1);

  const onButtonClick = () => {
    setBrenty((brenty) => brenty + 1);
  };

  return (

  
  <Experimental_CssVarsProvider theme={themeOptions}>
    <div>
      <Navbar />
      <ProjectImages />
      <Footer />
    </div>
  </Experimental_CssVarsProvider>);
}

export default App;
