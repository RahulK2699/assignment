import { Routes,Route } from "react-router-dom";
import About from "./Pages/About";
import Contactus from "./Pages/Contactus";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route exact path="/contact-us" element={ <Contactus/>} />
   </Routes>
  );
}

export default App;
