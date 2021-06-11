import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function Home() {
	const { user, loginWithRedirect, getAccessTokenSilently } = useAuth0();

	const callApi = async () => {
		try {
			const token = await getAccessTokenSilently({
				audience: `http://localhost:3000`,
			});
			const response = await fetch(`http://localhost:3000/bookings`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const responseData = await response.json();

			return responseData;
		} catch (err) {
			console.error(err);
			return err;
		}
	};

	useEffect(() => {
		callApi().then((res) => {
			let data = res.data;
			console.log(Object.keys(user));
			data.forEach((element) => {
				console.log(element.author);
			});
		});
	});

	return (
		<div>
			<nav>
				<ul>
					<li className='active'>
						<a href='/'>Home</a>
					</li>
					<li>
						<a onClick={() => loginWithRedirect()} href='/'>
							Login
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
