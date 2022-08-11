import { userAgent } from "next/server";
import React, { useState } from "react";
import {
	IconChevronDown,
	IconChevronUp,
	IconMailForward,
	IconMapPins,
} from "@tabler/icons";

export default function Detail(b) {
	return (
		<div className="text-center">
			<p>
				<IconMailForward />
				{b.email}
			</p>
			<p>
				<IconMapPins /> {b.address}
			</p>
		</div>
	);
}
