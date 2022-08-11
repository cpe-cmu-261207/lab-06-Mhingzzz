import { userAgent } from "next/server";
import React, { useState } from "react";
import {
	IconChevronDown,
	IconChevronUp,
	IconMailForward,
	IconMapPins,
} from "@tabler/icons";
import Detail from "./Detail";

export default function UseCard(b) {
	const [isClicked, setClicked] = useState(false);

	const show = () => {
		if (isClicked == true) {
			setClicked(false);
		} else {
			setClicked(true);
		}
	};
	return (
		<div className="border-bottom" onClick={show}>
			{/* main section */}
			<div className="d-flex align-items-center p-3">
				<img src={b.imgUrl} width="90px" class="rounded-circle me-4" />
				<span className="text-center display-6 me-auto">{b.name}</span>
				{isClicked ? <IconChevronUp /> : <IconChevronDown />}
			</div>

			{isClicked && <Detail {...b}></Detail>}
			{/* UserCardDetail*/}
		</div>
	);
}
