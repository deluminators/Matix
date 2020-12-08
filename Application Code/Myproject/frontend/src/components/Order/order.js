import React, { useState } from "react";
import List from "../list/list";
import axios from "axios";
import {IoIosAddCircle} from 'react-icons/io'
const lap = {
		Laptop1: 1,
		Quantity1: 0,
		Laptop2: 2,
		Quantity2: 0,
		Laptop3: 3,
		Quantity3: 0,
		Laptop4: 4,
		Quantity4: 0,
		Laptop5: 5,
		Quantity5: 0,
		Laptop6: 6,
		Quantity6: 0,
		Laptop7: 7,
		Quantity7: 0,
		Laptop8: 8,
		Quantity8: 0,
		Laptop9: 9,
		Quantity9: 0,
		Laptop10: 10,
		Quantity10: 0,
	}
const Order = () => {
	const [name, setName] = useState(lap);

	const [inputFields, setInputFields] = useState([1]);

	const [date, setDate] = useState("");
	const [id, setId] = useState("");
	const [conId, setConid] = useState("");
	const addName = (key, val) => {
		console.log(key, val);
		setName((pre) => {
			const obj = { ...pre };
			obj[`Quantity${key + 1}`] = val * 1;
			return obj;
		});
	};
	const handleAddFields = (e) => {
		e.preventDefault();

		setInputFields([...inputFields, [1]]);
	};
	console.log(name);
	return (
		<>
			<div className="cnt1">
				<div className="forms-cnt">
					<div className="signin-signup">
						<form action="#" className="sign-in-form">
							<h2 className="title">Create Order</h2>

							{inputFields.map((i) => (
								<div>
									<List setName={addName} />
									
								</div>
							))}
							
							{/* <List setName={addName} /> */}

							<div className="row-contain">
								<div className="text">Deadline</div>
								<div className="input-field-1">
									{/* <i className="fas fa-lock"></i> */}
									<input
										value={date}
										type="date"
										required
										onChange={(e) => {
											setDate(e.target.value);
											console.log(e.target.value);
										}}
									/>
								</div>
							</div>
							<div className="row-contain">
								<button
									type="submit"
									className="butt solid"
									onClick={async (e) => {
										e.preventDefault();
										try {
											// console.log(name);
											// console.log(date);
											// let requestBody = JSON.stringify({ ...name, deadline: date });
											// console.log(requestBody);
											const res = await axios.post("http://127.0.0.1:8000/order-create/", { ...name, deadline: date }, {
												// headers: {
												// 	"Content-Type": "application/json",
												// },
											});
											alert(`Order created with orderid ${res.data.orderID}!!`)
											setName(lap);setDate('');setInputFields([1])
											console.log(res.data);
										} catch (er) {
											console.log(er);
										}
									}}
								>
									Create
								</button>
								<IoIosAddCircle style={{alignSelf:'center',marginLeft:'20px'}} onClick={(e) => handleAddFields(e)} fontSize={60} color='#5995fd' />
							</div>
						</form>

						{/* order deletion */}

						<form action="#" className="sign-up-form">
							<h2 className="title">Delete Order</h2>
							<div className="row-contain">
								<div className="text">Order ID</div>
								<div className="input-field-1">
									{/* <i className="fas fa-user"></i> */}
									<input value={id} type="text" placeholder="Order ID" required onChange={(e) => setId(e.target.value)} />
								</div>
							</div>
							<div className="row-contain">
								<div className="text">Confirm ID</div>
								<div className="input-field-1">
									{/* <i className="fas fa-user"></i> */}
									<input value={conId} type="text" placeholder="Enter Order ID again" required onChange={(e) => setConid(e.target.value)} />
								</div>
							</div>
							<button
								type="submit"
								className="butt"
								value="Sign up"
								onClick={async (e) => {
									e.preventDefault();
									try {
										if (id === conId) {
											const res = await axios.delete(`http://127.0.0.1:8000/order-delete/${id}`);
											alert(`orderId ${id} successfully deleted!!`);
											
											console.log(res);
										}else{
											alert('Invalid input!')
										}
									} catch (er) {
										console.log(er);
										alert('Invalid input!')
									}
									setConid('');setId('');
								}}
							>
								Delete
							</button>
						</form>
					</div>
				</div>

				<div className="panels-cnt" style={{ position: "relative" }}>
					<div className="panel left-panel" style={{ paddingRight: "49%" }}>
						<div className="content" style={{ color: "black" }}>
							<h3>Delete Order</h3>
							<p>Want to delete an order! Click here to proceed.</p>
							<button
								className="butt transparent"
								id="sign-up-butt"
								onClick={() => {
									console.log("hello");
									const cnt = document.querySelector(".cnt1");
									cnt.classList.add("sign-up-mode");
								}}
							>
								Delete Order
							</button>
						</div>
						{/* <img src={logo} style={{width:'40%'}} className="image" alt="" /> */}
					</div>
					<div className="panel right-panel">
						<div className="content" style={{ color: "black" }}>
							<h3>Create Order</h3>
							<p>Want to create an order! Click here to proceed.</p>
							<button
								className="butt transparent"
								id="sign-in-butt"
								onClick={() => {
									console.log("hello1");
									const cnt = document.querySelector(".cnt1");
									cnt.classList.remove("sign-up-mode");
								}}
							>
								Create Order
							</button>
						</div>
						{/* <img src={require('../../logo.svg')} className="image" alt="" /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Order;
