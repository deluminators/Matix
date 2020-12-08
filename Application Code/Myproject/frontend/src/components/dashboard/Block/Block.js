import React,{useState,useEffect} from "react";
import "./Block.css";
import Spinner from '../../Spinner/Spinner';
import axios from 'axios';
const Block = (props) => {
	const [data,setData] = useState();
	const getdata =async () => {
		try{
			const res = await axios.get('http://127.0.0.1:8000/dashboard-details/');
			console.log(res.data);
		setData(res.data);
	}catch(er){
		console.log(er);
	}
		
	}
	useEffect(() => {
		getdata();
	},[])
  let arr = props.data;
	return (
		<div className="row1">
			<div className="col1">
				<div className="info-box1 red-bg">
					<i className="fa fa-check"></i>
					<div className="count">{data?69.71:<Spinner />}</div>
					<div className="title">DELL Tech SMI</div>
				</div>
			</div>
			<div className="col1">
				<div className="info-box1 blue-bg">
					<i className="fa fa-archive"></i>
					<div className="count">{data?data[0]:<Spinner />}</div>
					<div className="title">Total Orders</div>
				</div>
			</div>

			<div className="col1">
				<div className="info-box1 magenta-bg">
					<i className="fa fa-circle-o-notch"></i>
					<div className="count">{data?data[2]:<Spinner />}</div>
					<div className="title">Pending Orders</div>
				</div>
			</div>

			<div className="col1">
				<div className="info-box1 green-bg">
					<i className="fa fa-thumbs-o-up"></i>
					<div className="count">{data?data[1]:<Spinner />}</div>
					<div className="title">Completed Orders</div>
				</div>
			</div>

			<div className="col1">
				<div className="info-box1 red-bg">
					<i className="fa fa-check"></i>
					<div className="count">{data?74.82:<Spinner />}</div>
					<div className="title">DELL digital SMI</div>
				</div>
			</div>
		</div>
	);
};

export default Block;
