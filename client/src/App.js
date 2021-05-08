import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Booking from "./pages/Booking/Booking";

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
