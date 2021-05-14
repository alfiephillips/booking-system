import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import Room from "./pages/Room/Room";

function App() {
	return (
		<div>
			<Router>
				<Route path='/' exact render={() => <Home />} />
				<Route path='/bookings' exact render={() => <Booking />} />
				<Route path='/room/:id?' exact render={() => <Room />} />
			</Router>
		</div>
	);
}

export default App;
