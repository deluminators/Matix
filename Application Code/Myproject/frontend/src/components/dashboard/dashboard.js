import React, { useState, useContext, useEffect, PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

import ForecastDataCreator from "../../optimization/forecastData";
import OrderListCreator from "../../optimization/orderListCreator";
import Optimize from "../../optimization/optimize";
import MakeBuffer from "../../optimization/makeBuffer";
import BufferLinesCalculator from "../../optimization/bufferLinesCalculator";

import { LaptopContext } from "../../context/laptopContext";

import Table from "../table/table";
import Block from "./Block/Block";
import { InputGroup } from "react-bootstrap";
import RefactorData from "./refactorData";
import LaptopTableHelper from "./laptopTableData";

const Dashboard = () => {
	const [laptops, setLaptops] = useContext(LaptopContext);

	const [arr, setarr] = useState([0, 0, 0, 0, 0]);
	const [table, setTable] = useState();

	let finalOutput = new Array();

	const startOptimization = async () => {
		let today = new Date();
		let curDate = new Date(today.toLocaleDateString());

		let res = await axios.get("http://127.0.0.1:8000/order-pending/");

		// let ar = await axios.get("something")
		// setarr(ar)//////////////////////////////////////////////////////////////////
		setarr([2, 44, 2, 1, 4]);

		let orderList = new OrderListCreator(res.data).startProcess();

		//converting orderList for optimization algo

		let LaptopList = new Array();
		for (let i = 0; i < orderList.ans.length; i++) {
			for (let j = 0; j < parseInt(orderList.ans[i].quantity); j++) {
				LaptopList.push(orderList.ans[i]);
			}
		}

		let result = new MakeBuffer(LaptopList, 2, curDate).startSplitting();

		console.log("buffer laptops:");
		console.log(result.bufferLaptop);

		let pendingLaptopAfterDayOne;

		if (result.bufferLaptop.length != 0) {
			let isPossible = false;
			let count = 3;

			while (isPossible == false) {
				isPossible = new BufferLinesCalculator(result.bufferLaptop, count).startProcess();
				// console.log(isPossible);
				count += 3;
			}

			console.log(`required lines : ${count - 3}`);

			let proceedOutput = new Optimize(result.pendingLaptop, result.bufferLaptop, count - 3).startProcess();

			pendingLaptopAfterDayOne = proceedOutput.backlogLaptops;

			console.log("--------------------");

			finalOutput.push({
				date: today.toISOString().split("T")[0],
				rawLaptopList: LaptopList,
				orderReceive: LaptopList.length,
				orderComplete: proceedOutput.quantityProcessed,
				lines: proceedOutput.lines,
				forecast: null,
				processed: proceedOutput.processedLaptops,
				pending: proceedOutput.backlogLaptops,
			});
		} else {
			// If no buffer laptop run 3 lines for 24 hours
			let proceedOutput = new Optimize(result.pendingLaptop, [], 3).startProcess();

			pendingLaptopAfterDayOne = proceedOutput.backlogLaptops;

			finalOutput.push({
				date: today.toISOString().split("T")[0],
				rawLaptopList: LaptopList,
				orderReceive: LaptopList.length,
				orderComplete: proceedOutput.quantityProcessed,
				lines: proceedOutput.lines,
				forecast: null,
				processed: proceedOutput.processedLaptops,
				pending: proceedOutput.backlogLaptops,
			});
		}

		// Forecast works
		let forcastRes = await axios.get(`http://127.0.0.1:8000/forecast/${new Date().toISOString().split("T")[0]}`);
		// console.log(forcastRes.data);
		let forecastData = new RefactorData(forcastRes.data).start();
		console.log(forecastData);

		let forecastOrderList = new ForecastDataCreator(forecastData).startProcess();
		// console.log(forecastOrderList);

		let ForecastLaptopList = new Array();
		for (let i = 0; i < forecastOrderList.ans.length; i++) {
			for (let j = 0; j < parseInt(forecastOrderList.ans[i].quantity); j++) {
				ForecastLaptopList.push(forecastOrderList.ans[i]);
			}
		}

		// console.log(`Forecastlaptop : ${ForecastLaptopList.length}`);
		// console.log(`pending laptop : ${pendingLaptopAfterDayOne.length}`);
		ForecastLaptopList = ForecastLaptopList.concat(pendingLaptopAfterDayOne);
		// console.log(`Forecastlaptop : ${ForecastLaptopList.length}`);

		let increment = 1;
		let dayy = new Date();
		while (increment <= 7) {
			// dayy = dayy.setDate(today.getDate() + 1);
			dayy.setDate(dayy.getDate() + 1);
			console.log(dayy);

			let forcastedLaptopNum = (dayy) => {
				let arr = forecastData[dayy.toISOString().split("T")[0]];
				let sum = 0;
				for (let i = 0; i < arr.length; i++) {
					sum = sum + parseInt(arr[i].demand);
				}
				// console.log(sum);
				return sum;
			};
			let forcastNum = forcastedLaptopNum(dayy);
			// today.toLocaleDateString()
			let inputDate = new Date(dayy.toLocaleDateString());

			let splitted = new MakeBuffer(ForecastLaptopList, 2, inputDate).startSplitting();

			if (splitted.bufferLaptop.length != 0) {
				let isPossible = false;
				let count = 3;

				while (isPossible == false) {
					isPossible = new BufferLinesCalculator(splitted.bufferLaptop, count).startProcess();
					// console.log(isPossible);
					count += 3;
				}

				console.log(`required lines : ${count - 3}`);

				let proceedOutput = new Optimize(splitted.pendingLaptop, splitted.bufferLaptop, count - 3).startProcess();

				ForecastLaptopList = proceedOutput.backlogLaptops;

				console.log("--------------------");

				finalOutput.push({
					date: dayy.toISOString().split("T")[0],
					rawLaptopList: ForecastLaptopList,

					orderReceive: null,
					forecast: forcastNum,
					orderComplete: proceedOutput.quantityProcessed,
					lines: proceedOutput.lines,
					processed: proceedOutput.processedLaptops,
					pending: proceedOutput.backlogLaptops,
				});
				// setPendingFields(proceedOutput.backlogLaptops);
			} else {
				// If no buffer laptop run 3 lines for 24 hours
				let proceedOutput = new Optimize(splitted.pendingLaptop, [], 3).startProcess();

				ForecastLaptopList = proceedOutput.backlogLaptops;

				// console.log([{ date: dayy.toISOString().split("T")[0], processed: proceedOutput.processedLaptops, pending: proceedOutput.backlogLaptops }]);
				finalOutput.push({
					date: dayy.toISOString().split("T")[0],
					rawLaptopList: ForecastLaptopList,

					orderReceive: null,
					forecast: forcastNum,
					orderComplete: proceedOutput.quantityProcessed,
					lines: proceedOutput.lines,
					processed: proceedOutput.processedLaptops,
					pending: proceedOutput.backlogLaptops,
				});
				// setLaptops([...laptops, { date: dayy.toISOString().split("T")[0], processed: proceedOutput.processedLaptops, pending: proceedOutput.backlogLaptops }]);
			}

			increment = increment + 1;
		}
		console.log("---------done-----------");
		console.log(finalOutput.length);
		console.log(finalOutput);

		let forcast = [],
			date = [],
			receOrdr = [],
			complOrdr = [],
			pendOrdr = [],
			lines = [];
		for (let i = 0; i < 7; i++) {
			const element = finalOutput[i];
			date.push(element.date);
			if (element.orderReceive == null) receOrdr.push("_");
			else receOrdr.push(element.orderReceive);

			if (element.forecast == null) forcast.push("_");
			else forcast.push(element.forecast);

			complOrdr.push(element.orderComplete);

			pendOrdr.push(element.pending.length);

			lines.push(element.lines.length);
		}
		let op = { forcast, date, receOrdr, complOrdr, pendOrdr, lines };
		setLaptops(finalOutput);
		setTable(op);
	};

	useEffect(() => {
		startOptimization();
		// .then(() => {
		// 	tablePopulator();
		// });
	}, []);
	if (!table) return <div>loading</div>;
	return (
		<>
			<div className="cnt2">
				<div className="cnt3">
					<Block data={arr} />
					<Table
						colHead={[...table.date]}
						rowHead={["Forecast", "order Received", "Orders Completed", "pending Orders", "Lines Used"]}
						data={[[...table.forcast], [...table.receOrdr], [...table.complOrdr], [...table.pendOrdr], [...table.lines]]}
					/>
					<Table rowHead={new LaptopTableHelper().getNames()} colHead={["step1", "step2", "step3", "total"]} data={new LaptopTableHelper().getStepHours().hours} />
					<div style={{ margin: "0 auto", display: "flex", justifyContent: "center" }}>
						<ResponsiveContainer width="60%" height={300}>
							<BarChart
								width={1800}
								height={300}
								data={new LaptopTableHelper().getStepHours().data}
								margin={{
									top: 15,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="step1" stackId="a" fill="#8884d8" />
								<Bar dataKey="step2" stackId="a" fill="#82ca9d" />
								<Bar dataKey="step3" stackId="a" fill="#82239d" />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
