import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import Sidebar from "./Sidebar";

const Feed = () => {
	const { loading, searchResults } = useContext(Context);

	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
	}, []);

	return (
		<div className="flex flex-row h-[calc(100%-56px)]">
			<Sidebar />
		</div>
	);
};

export default Feed;
