import React, { useState, useEffect, useContext, PureComponent } from "react";
import Spinner from "../../Spinner/Spinner";
import { LaptopContext } from "../../../context/laptopContext";
import { useLocation } from "react-router-dom";

const PostSessionDetails = (props) => {
	const location = useLocation();

	let index = location.state.detail;
	const [laptops, setLaptops] = useContext(LaptopContext);

	const [lapqunatity, setlapquantuty] = useState();
	let makeLaptopQuantityList = async () => {
		console.log(props.index);

		let map = {};
		for (let i = 0; i < laptops[index].pending.length; i++) {
			if (map[laptops[index].pending[i].name.name]) map[laptops[index].pending[i].name.name]++;
			else map[laptops[index].pending[i].name.name] = 1;
		}
		console.log(map);
		// return map;
		setlapquantuty(map);
	};
	useEffect(() => {
		makeLaptopQuantityList();
		console.log(lapqunatity);
	},[laptops[location.state.detail].orderComplete]);
	if (!lapqunatity)
		return (
			<div>
				<Spinner />
			</div>
		);
	return (
		<div class="post-Session-details">
			<h1 style={{ fontWeight: 600, fontSize: 29 ,marginBottom:10}}>Post-Session Details</h1>
			<span class="details" style={{ fontWeight: 600 }}>
				{" "}

				<h2 style={{ display: "inline" }}>Laptops waiting to be manufactured :  </h2>
						{laptops[index].pending.length}
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
	);
};

export default PostSessionDetails;
