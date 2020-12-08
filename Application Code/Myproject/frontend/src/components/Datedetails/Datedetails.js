import React, { useContext, useState } from "react";
import MfdLayout from "../MfdLayout/MfdLayout";
import "./style.css";
import SessionDetails from "./SessionDetails/SessionDetails";
import PostSessionDetails from "./PostSessionDetails/PostSessionDetails";
import { useLocation } from "react-router-dom";
import { LaptopContext } from "../../context/laptopContext";
import { useHistory } from "react-router-dom";

import MakeBuffer from "../../optimization/makeBuffer";
import BufferLinesCalculator from "../../optimization/bufferLinesCalculator";
import Optimize from "../../optimization/optimize";
import Styles from "./Datedetails.module.css";
const DateDetails = (props) => {
	let history = useHistory();

	const [laptops, setLaptops] = useContext(LaptopContext);

	const [localLaptop, setLocalLaptop] = useState();
	const [val, setVal] = useState();

	const location = useLocation();

	const startFail = async (val) => {
		let lapi = laptops[location.state.detail];
		let curDay = new Date(lapi.date);
		curDay = new Date(curDay.toLocaleDateString());
		let result = new MakeBuffer(lapi.rawLaptopList, 2, curDay).startSplitting();
		console.log(result.bufferLaptop);

		let proceedOutput = new Optimize(result.pendingLaptop, result.bufferLaptop, lapi.lines.length - parseInt(val)).startProcess();

		let lapObj = {
			date: lapi.date,
			rawLaptopList: lapi.rawLaptopList,
			orderReceive: lapi.orderReceive,
			orderComplete: proceedOutput.quantityProcessed,
			lines: proceedOutput.lines,
			forecast: null,
			processed: proceedOutput.processedLaptops,
			pending: proceedOutput.backlogLaptops,
			isFailed: true,
		};

		// console.log(laptops[7]);
		// console.log(laptops[8]);
		let x = [];
		if (laptops[8] == undefined) {
			x = [...laptops, lapObj];
		} else {
			laptops[8] = lapObj;
			x = [...laptops];
		}
		setLaptops(x);
		//setLaptops(laptops=>)
		console.log(x);
		setLocalLaptop(lapObj);
		history.push({ pathname: "/date-details", state: { detail: 8 } });

		// console.log(lapObj);
	};

	return (
		<div className="cnt2">
			<div className="cnt3">
				<input
					style={{ width: "30%", border: "1.5px solid gray", borderRadius: 4, padding: 7, textAlign: "center", margin: 10 }}
					type="number"
					id="fail"
					placeholder="Enter no. of lines to fail"
					onChange={(e) => setVal(e.target.value)}
				/>
				<button
					className="butt solid"
					onClick={(e) => {
						// e.preventDefault();
						startFail(val);
					}}
				>
					Simulate
				</button>

				<MfdLayout />
				<br />
				<SessionDetails />
				<PostSessionDetails index="0" />
			</div>
		</div>
	);
};

export default DateDetails;
