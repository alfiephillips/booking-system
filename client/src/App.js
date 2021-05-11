import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import Calendar from "./pages/Calendar/Calendar";

function App() {
	return (
		<div>
			<Router>
				<Route path='/' exact render={() => <Home />} />
				<Route path='/bookings' exact render={() => <Booking />} />
				<Route path='/calendar' exact render={() => <Calendar />} />
			</Router>
		</div>
	);
}

export default App;
