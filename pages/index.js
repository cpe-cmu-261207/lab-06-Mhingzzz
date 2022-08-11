import {
	IconChevronDown,
	IconChevronUp,
	IconMailForward,
	IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import axios from "axios";
import UseCard from "../Components/UseCard";

export default function Home() {
	const [Number, todoNumber] = useState(``);

	const [user, userInfo] = useState([]);

	const genUsers = async () => {
		if (Number > 0) {
			const resp = await axios.get(
				`https://randomuser.me/api/?results=${Number}`
			);
			const newUsers = [];
			for (const x of resp.data.results) {
				newUsers.push({
					name: x.name.first + " " + x.name.last,
					email: x.email,
					imgUrl: x.picture.large,
					address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
				});
			}
			userInfo(newUsers);
		} else {
			alert("Invalid number of user");
		}
	};

	return (
		<div style={{ maxWidth: "700px" }} className="mx-auto">
			{/* App Header */}
			<p className="display-4 text-center fst-italic m-4">
				Multiple Users Generator
			</p>
			{/* Input Section */}
			<div className="d-flex justify-content-center align-items-center fs-5 gap-2">
				Number of User(s)
				<input
					className="form-control text-center"
					style={{ maxWidth: "100px" }}
					type="number"
					onChange={(event) => todoNumber(event.target.value)}
				/>
				<button class="btn btn-dark" onClick={() => genUsers()}>
					Generate
				</button>
			</div>

			{user.map((a) => (
				<UseCard {...a}></UseCard>
			))}

			{/* made by section */}
			<p className="text-center mt-3 text-muted fst-italic">
				made by Nathaphong Phongsawaleesri 640610630
			</p>
		</div>
	);
}
