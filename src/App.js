import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Account from "./pages/Account/Account";
import LogInPage from "./pages/LogInPage/LognInPage";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/search/:query" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
