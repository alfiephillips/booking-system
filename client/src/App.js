import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register/Register";
import Booking from "./pages/Booking/Booking";
import Login from "./pages/Login/Login";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/bookings" exact render={() => <Booking />} />
      </Router>
    </div>
  )
}

export default App;
