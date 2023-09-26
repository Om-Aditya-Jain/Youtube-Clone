import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
	const [loading, setLoading] = useState(false);
	const [searchResults, setSearchResults] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [selectCategories, setSelectCategories] = useState("New");

	useEffect(() => {
		fetchSelectedCategoryData(selectCategories);
	}, [selectCategories]);

	const fetchSelectedCategoryData = (query) => {
		setLoading(true);
		fetchDataFromApi(`search/?q=${query}`).then(({ contents }) =>
			setSearchResults(contents)
		);
		setLoading(false);
	};

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				searchResults,
				setSearchResults,
				mobileMenu,
				setMobileMenu,
				selectCategories,
				setSelectCategories,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
