import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const LaptopContext = createContext();

export const LaptopProvider = (props) => {
	const [laptops, setLaptops] = useState([]);

	return <LaptopContext.Provider value={[laptops, setLaptops]}>{props.children}</LaptopContext.Provider>;
};
