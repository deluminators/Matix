import React, { useState } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typeahead, Highlighter, Menu, MenuItem } from "react-bootstrap-typeahead";
import List from "react-tiny-virtual-list";

const ListL = (props) => {
	const options = ["XPS 13", "XPS 15", "Inspiron 3567", "Inspiron 5379", "Inspiron 7567", "Vostro 3568", "Vostro 5370", "Latitude 5480", "Alienware 15", "Alienware 17"];
	const renderMenu = (results, menuProps, props) => {
		const itemHeight = 32;
		return (
			<Menu {...menuProps}>
				<List
					scrollToIndex={props.activeIndex || 0}
					scrollToAlignment="auto"
					height={results.length < 5 ? results.length * itemHeight : 280}
					itemCount={results.length}
					itemSize={itemHeight}
					renderItem={({ index, style }) => {
						const item = results[index];
						return (
							<MenuItem key={item} option={item} position={index} style={style}>
								<Highlighter search={props.text}>{item}</Highlighter>
							</MenuItem>
						);
					}}
				/>
			</Menu>
		);
	};
	const [ind, setInd] = useState();
	const [quantity, setQuantity] = useState("");
	return (
		<div>
			<div className="row-contain">
				<div className="text">Item Name</div>
				<div className="input-field-1">
					<div style={{ margin: "auto 0" }}>
						<Typeahead
							onChange={(selected) => {
								// console.log(selected);

								setInd(options.findIndex((el) => el === selected[0]));
								// console.log(ind);
							}}
							id="pagination-example"
							maxResults={false}
							options={options}
							paginate={false}
							placeholder="Type a Laptop Name.."
							renderMenu={renderMenu}
						/>
					</div>
				</div>
			</div>
			<div className="row-contain">
				<div className="text">Quantity</div>
				<div className="input-field-1">
					<input
						value={quantity}
						type="number"
						placeholder="Quantity"
						required
						onChange={(e) => {
							setQuantity(e.target.value);
							props.setName(ind, e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ListL;
