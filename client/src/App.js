import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

function App() {
	return (
		<div>
			<Router>
				<Route path='/' exact render={() => <Home />} />
				<Route path='/bookings' exact render={() => <Booking />} />
			</Router>
		</div>
	);
}

export default App;
