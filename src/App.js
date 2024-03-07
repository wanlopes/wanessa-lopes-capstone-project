import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Account from "./pages/Account/Account";
import LogInPage from "./pages/LogInPage/LognInPage";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Account />}></Route>
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
