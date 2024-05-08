import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./utils/PrivateRoutes";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import Account from "./pages/Account";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/post" element={<CreatePost />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
