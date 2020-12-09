import React, { useState, useEffect, useContext, PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LaptopContext } from "../../../context/laptopContext";
import { useLocation } from "react-router-dom";

import Spinner from "../../Spinner/Spinner";
const SessionDetails = (props) => {
	const [laptops, setLaptops] = useContext(LaptopContext);
	const [lapqunatity, setlapquantuty] = useState();
	const [linedata, setLineData] = useState();
	const location = useLocation();

	let populateLineData = async () => {
		let data = new Array();
		for (let i = 0; i < laptops[location.state.detail].processed.length; i++) {
			data.push({ name: i + 1, hours: laptops[location.state.detail].lines[i], quantity: laptops[location.state.detail].processed[i].length });
		}
		setLineData(data);
	};

	let makeLaptopQuantityList = async () => {
		let map = {};
		for (let i = 0; i < laptops[location.state.detail].processed.length; i++) {
			for (let j = 0; j < laptops[location.state.detail].processed[i].length; j++) {
				if (map[laptops[location.state.detail].processed[i][j].name.name]) map[laptops[location.state.detail].processed[i][j].name.name]++;
				else map[laptops[location.state.detail].processed[i][j].name.name] = 1;
			}
		}
		console.log(map);
		// return map;
		setlapquantuty(map);
	};
	useEffect(() => {
		makeLaptopQuantityList();
		populateLineData();
		console.log(lapqunatity);
	}, [laptops[location.state.detail].orderComplete]);
	if (!lapqunatity || !linedata)
		return (
			<div>
				<Spinner />
			</div>
		);
	return (
		<div className="Session-Details">
			<h1 style={{ fontWeight: 600, fontSize: 29, marginTop: 10,marginBottom:10 }}>Session Details</h1>
			<div className="Laptop-Details">
				<div className="Laptop-Details1">
					<span className="details" style={{ fontWeight: 600 }}>
						{" "}
						<h2 style={{ display: "inline" }}>Laptops manufactured : </h2>
						{laptops[location.state.detail].orderComplete}
					</span>
					<br />
					{Object.keys(lapqunatity).map((item, index) => {
						return (
							<div style={{ fontSize: 19 }}>
								{item}: {lapqunatity[item]}
							</div>
						);
					})}
				</div>
			</div>
			<div className="Line-Details">
				<div className="Details">
					<div style={{ fontSize: "24px" }}>Lines Used: {laptops[location.state.detail].lines.length}</div>

					<ResponsiveContainer width="100%" height={300}>
						<BarChart
							width={1800}
							height={300}
							data={linedata}
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
							<Bar dataKey="hours" fill="#143d59" />
							<Bar dataKey="quantity" fill="#43c86f" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default SessionDetails;
