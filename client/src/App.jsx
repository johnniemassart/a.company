import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./utils/PrivateRoutes";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import CreatePost from "./pages/CreatePost";
import FollowingAccount from "./components/FollowingAccount/FollowingAccount";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/:username" element={<Profile />} />
            <Route path="/:username/post" element={<CreatePost />} />
            <Route path="/:username/account" element={<Account />} />
            <Route
              path="/:username/account/:id"
              element={<FollowingAccount />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
