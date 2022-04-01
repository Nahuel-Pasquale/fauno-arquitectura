// import LogoOverlay from "./components/LogoOverlay/LogoOverlay";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Work } from "./Pages/Work";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home isOpen={isOpen} handleOpen={handleOpen} />}
        ></Route>
      </Routes>
      <Routes>
        <Route exact path="/work" element={<Work />}></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/about"
          element={<About isOpen={isOpen} handleOpen={handleOpen} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/contact"
          element={<Contact isOpen={isOpen} handleOpen={handleOpen} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
