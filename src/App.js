import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Account from "./pages/Account/Account";
import LogInPage from "./pages/LogInPage/LognInPage";
import Search from "./pages/Search/Search";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile user={user} />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route
            path="/login"
            element={<LogInPage setUser={setUser} />}
          ></Route>
          <Route path="/search/:query" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
