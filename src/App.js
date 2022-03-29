// import LogoOverlay from "./components/LogoOverlay/LogoOverlay";

import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Work } from "./Pages/Work";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Work" element={<Work />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/About" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
