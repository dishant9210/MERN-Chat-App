import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signup";
import Home from "./pages/home/Home.jsx";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
   <div className="p-4 justify-center items-center flex h-screen">
    <Routes>
    <Route path = '/' element = {<Home/>} />
    <Route path = '/login' element = {<Login/>} />
    <Route path = '/signup' element = {<SignUp/>} />
    </Routes>
   </div>
  );
}

export default App;
