import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";

const Feed = () => {
	const { loading, searchResults } = useContext(Context);

	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
	}, []);

	return (
		<div className="flex flex-row h-[calc(100%-56px)]">
			<LeftNav />
		</div>
	);
};

export default Feed;
