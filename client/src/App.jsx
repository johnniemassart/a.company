import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./utils/PrivateRoutes";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import CreatePost from "./pages/CreatePost";
import FollowingAccount from "./pages/FollowingAccount";
import PostPage from "./pages/PostPage";
import UsersList from "./pages/UsersList";
import SignUpConfirmation from "./pages/SignUpConfirmation";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupconfirmation" element={<SignUpConfirmation />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/:username" element={<Profile />} />
            <Route path="/:username/create" element={<CreatePost />} />
            <Route path="/:username/userslist" element={<UsersList />} />
            <Route path="/:username/account" element={<Account />} />
            <Route
              path="/:username/account/:id"
              element={<FollowingAccount />}
            />
            <Route path="/:username/:author/:postid" element={<PostPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
