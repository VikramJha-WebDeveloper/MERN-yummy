import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";

const settings = createContext();

function App() {
  const defaultSettings = {
    themeColors: {
      firstColor: "danger",
      lightDark: "gray",
      bgColor: "#f2f2f2",
      dangerColor: "#dc3545",
    },
    fontFamily: '"Edu AU VIC WA NT Hand", cursive',
  };
  return (
    <>
      <BrowserRouter>
        <settings.Provider value={defaultSettings}>
          <Routes>
            <Route path="/home" element={<HomePage></HomePage>}></Route>

            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>

            <Route path="*" element={<Navigate to="/home" />}></Route>
          </Routes>
        </settings.Provider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
export { settings };
