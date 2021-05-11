import "./Calendar.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import BookingCalendar from "../../components/Calendar";
function Calendar() {
	const { user } = useAuth0();

	return (
		<div>
			<BookingCalendar />
		</div>
	);
}

export default Calendar;
