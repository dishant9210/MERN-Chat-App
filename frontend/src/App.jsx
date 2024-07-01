import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Home from "./pages/home/Home.jsx";
import { Navigate, Route,Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";



// App.jsx
function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 justify-center items-center flex h-screen">
      <Toaster />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
