import React,{useState,useEffect} from 'react';
import Table from '../table/table';
import RefactorData from './RefactorData';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import Tooltip from '../Tooltip/Tooltip';
import OrderStatus from './OrderStatus'
import Spinner from '../Spinner/Spinner'
import axios from 'axios'

const Tooldiv = (props) => {
  return (
    <div>
      {Object.keys(props.data).map((el) => {
        if (el === 'Total') return null;
        if(props.data[el]*1 <=0 ) return null;
        return (
          <p style={{ margin: '5px',fontSize:'18px' }}>
            {el} : {props.data[el]}
          </p>
        );
      })}
      <p style={{ margin: '5px',fontSize:'18px' }}>Total:{props.data['Total']}</p>
    </div>
  );
};

const AllOrder = () => {
  // const data = RefactorData({});
  const [data,setData] = useState()
  const setdata =async () => {
    try{
      const res = await axios.get('http://127.0.0.1:8000/order-list/');
      setData(RefactorData(res.data))
    }catch(er){
      console.log(er);
    }
  }
  useEffect(() => {
    setdata()
  },[])
  console.log(data);
  return (
    <div className='cnt2'>
    <div className='cnt3'>
    <OrderStatus  />
    <div style={{margin:'0 320px'}}>
    <h1 style={{fontWeight:'bold',fontSize:40,transform:'translate(0,0)'}}>All Orders</h1>
      {data?<Table
              rowHead={Object.keys(data.tooltip).map((e) => (
                <Tooltip
                  content={<Tooldiv data={data.tooltip[e]} />}
                  direction={'right'}
                >
                  <IoIosInformationCircleOutline fontSize={20} color="white" />
                </Tooltip>
              ))}
              colHead={['OrderId', 'Order Date', 'Deadline', 'Status']}
              data={data.data}
            />:<Spinner />}

      </div>

    </div></div>
  );
};

export default AllOrder;
