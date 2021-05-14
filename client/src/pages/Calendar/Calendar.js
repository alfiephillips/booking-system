import "./Calendar.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
function Calendar() {
	const { user } = useAuth0();

	return <div></div>;
}

export default Calendar;
