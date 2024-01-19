import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Signing from "./pages/Signing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1 className='text-3xl text-red-500'>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/About' element={About} />
          <Route path='/Projects' element={Projects} />
          <Route path='/Signing' element={Signing} />
          <Route path='/SignUp' element={SignUp} />
          <Route path='/Dashboard' element={Dashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
