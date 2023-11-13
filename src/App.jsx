import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Compose from "./Components/Compose/Compose.jsx";
import Emailverify from "./Components/Emailverify/Emailverify.jsx";
import GraphComp from "./Components/Graph/GraphComp.jsx";
import Home from "./Components/Home/Home.jsx";
import Info from "./Components/Log/Info/Info.jsx";
import Log from "./Components/Log/Log.jsx";
import Login from "./Components/Login/Login.jsx";
import NavComp from "./Components/Navbar/Navbar.jsx";
import PasswordRes from "./Components/Password-Reset/PasswordRes.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import ResetPassComp from "./Components/ResetPassComp/ResetPassComp.jsx";
import Settings from "./Components/Settings/Settings.jsx";
import Signup from "./Components/Signup/Signup.jsx";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("x-Auth-token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="App">
      <NavComp />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* Compose Route */}
        <Route
          path="/compose"
          element={
            <ProtectedRoute>
              <Compose />
            </ProtectedRoute>
          }
        />
        {/* Graph Route */}
        <Route
          path="/graph"
          element={
            <ProtectedRoute>
              <GraphComp />
            </ProtectedRoute>
          }
        />
        {/* Log Route */}
        <Route
          path="/log/*"
          element={
            <ProtectedRoute>
              <Log />
            </ProtectedRoute>
          }
        />
        {/* Info Route */}
        <Route
          path="/login/info"
          element={
            <ProtectedRoute>
              <Info />
            </ProtectedRoute>
          }
        />
        {/* Settings Route */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/* Password Reset Route */}
        <Route path="/password-reset" element={<PasswordRes />} />
        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />
        {/* Reset Password Completion Route */}
        <Route
          path="/pas-reset-completion/:string"
          element={<ResetPassComp />}
        />
        {/* Email Verification Route */}
        <Route path="/emailverify/:string" element={<Emailverify />} />
      </Routes>
    </div>
  );
}

export default App;
