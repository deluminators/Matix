import React, { useState, useContext, useEffect } from "react";
import styles from "./MfdLayout.module.css";
import Timeline from "./timeline";
// import StartOptimization from "./getOptimization";
import Spinner from "../Spinner/Spinner";
import { LaptopContext } from "../../context/laptopContext";
import { useLocation } from "react-router-dom";

const MfdLayout = (props) => {
	const [laptops, setLaptops] = useContext(LaptopContext);

	const [processed, setProcessed] = useState();
	const location = useLocation();
	const setData = async () => {
		const data = laptops;
		console.log(data[location.state.detail]);
		console.log(location.state.detail, "blahblah");
		setProcessed(data[location.state.detail].processed);
	};
	useEffect(() => {
		setData();
	},[laptops[location.state.detail].orderComplete]);
	if (!processed)
		return (
			<div className={styles.container}>
				<Spinner />
			</div>
		);
	return (
		<div className={styles.container}>
			<div className={styles.header}>Manufacturing Layout Session: {laptops[location.state.detail].date}</div>
			<br/>
			<Timeline data={processed} />
		</div>
	);
};

export default MfdLayout;
