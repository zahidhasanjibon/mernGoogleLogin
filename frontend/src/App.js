import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import "./style/app.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      axios
        .get("http://localhost:5000/auth/login/success")
        .then((res) => console.log(res.data));
      // fetch("http://localhost:5000/auth/login/success", {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Credentials": true,
      //   },
      // })
      //   .then((res) => {
      //     if (res.status === 200) return res.json();
      //     throw new Error("authentication failed");
      //   })
      //   .then((data) => console.log(data))
      //   .catch((err) => console.log(err));
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
