import {BrowserRouter , Routes, Route} from "react-router-dom";
import { Home } from "./components/page/Home";
import { Nav } from "./components/page/Nav";
import { About } from "./components/page/About";
import { Contact } from "./components/page/Contact";
import { Error404 } from "./components/page/Error404";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
       <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error404/>}/ >
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
