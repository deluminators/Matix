import React, { useEffect, useState } from "react";
import styles from "./MfdLayout.module.css";
import Tooltip from "../Tooltip/Tooltip";

const Box = (props) => {
	return (
		<div
			style={{
				display: "flex",
				height: "45px",
				backgroundColor: props.color,
				color: "white",
				marginBottom: "20px",
				width: props.perc,
				textAlign: "center",
				justifyContent: "center",
				boxShadow: "0 3px 7px rgba(0,0,0,0.5)",
			}}
		>
			<Tooltip style={{ display: "flex", width: "100%", borderWidth: 1 }} content={props.content} direction="right">
				<div style={{ alignSelf: "center", display: "flex", flex: 1, justifyContent: "center" }}>
					{props.value}
					{/*props.value*/}
				</div>
			</Tooltip>
		</div>
	);
};

const TooltipContent = ({ data, date }) => {
	return (
		<div>
			<p style={{ marginBottom: "5px" }}>{data.name}</p>
			<p style={{ marginBottom: "5px" }}>step1: {data.step1} hours</p>
			<p style={{ marginBottom: "5px" }}>step2: {data.step2} hours</p>
			<p style={{ marginBottom: "5px" }}>step3: {data.step3} hours</p>
			<p style={{ marginBottom: "5px" }}>dadline : {date}</p>
		</div>
	);
};

const Timeline = (props) => {
	//let val = 0;

	return (
		<div>
			<div style={{ width: "100%" }}>
				{props.data.map((el) => {
					// console.log(el);
					return (
						<div className={styles.contain + " " + styles.containanim}>
							{el.map((el) => {
								//setVal((val) => el.name.totalTime);
								// console.log(el.name.totalTime, "kajcbk");
								return (
									<Box
										content={<TooltipContent data={el.name} date={el.date} />}
										color={el.name.colour}
										value={el.name.name}
										perc={((el.name.totalTime * 1) / 24) * 100 + "%"}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Timeline;
