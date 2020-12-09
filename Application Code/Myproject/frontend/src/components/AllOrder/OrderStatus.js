import React,{useState,useEffect} from 'react';
import styles from './AllOrder.module.css';
import Spinner from '../Spinner/Spinner'
import Refactor2 from './Refactor2'
import axios from 'axios';

const Datadiv = ({data}) => {
	return <div style={{display:'flex',flexDirection:'column'}}>
		{Object.keys(data).map(el => {
if(el === 'deadline') return null;
      let val=el;let col = 'red';
      if(el === 'orderID') {val = 'Order ID';col = 'black'}
      else if(el === 'orderDate'){ val = 'Date of Order';col = 'black'}
      // else if(el === 'deadline') {val = 'Expt. Shipment Date';col = 'green'}
      return <p style={{margin:'10px',fontSize:20,fontWeight:'600',color:col}}>{val} : {data[el]}</p>})}
      <p style={{margin:'10px',fontSize:20,fontWeight:'600',color:'green'}}>Expt. Shipment Date : {data['deadline']}</p>
	</div>
}

const OrderStatus = () => {
	const [id,setId] = useState('');
	const [loading,setLoading] = useState(false);
	const [data,setData] = useState();
	const setdata =async () => {
    console.log('hello')
		setLoading(true);
    try{
        const res =await axios.get(`http://127.0.0.1:8000/order-details/${id}`)
    const data = Refactor2(res.data);
    setData(data);
  }catch(er){
    alert('Check Order ID and try again!!')
  }
	
		setLoading(false);
	}
	return <div className={styles.statusContainer}>
	<h1 style={{fontSize:30,fontWeight:'bold',margin:'20px 0'}}>Order Status</h1>
		<div
          className="row-contain"
          style={{
            width: '89%',
            margin: 'auto',
            justifyContent: 'space-around',
          }}
        >
          <div className="input-field-1">
            {/* <i className="fas fa-lock"></i> */}
            <input
              value={id}
              type="text"
              placeholder="Order ID"
              required
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="butt solid"
            style={{ margin: 'auto' }}
            onClick={setdata}
          >
            search
          </button>
        </div>
        {data?<Datadiv data={data}/>:<p style={{marginTop:'50px'}}>Details of order will be displayed here!</p>}
        {loading && <Spinner />}
  		
	</div>
}

export default OrderStatus;