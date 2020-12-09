import React, { useState } from 'react';
import Card from './card/card';
import Table from '../table/table';
import Spinner from '../Spinner/Spinner'
import axios from 'axios';
import List from './List';
import LineGraph from './LineGraph';
const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const getNthDay = (days) => {
    const date = new Date();
    const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    const day =last.getDate();
    const month=last.getMonth()+1;
    const year=last.getFullYear();
    let obj={};
    obj[`${year}/${month}/${day}`] = week[last.getDay()];
    return [`${year}-${month}-${day}`,week[last.getDay()]];
}

const FormData = (data) => {
  Object.keys(data[0]).forEach(el => {
    let d = data[0][el];
    delete data[0][el];
    data[0][el.replaceAll('/','-')] = d;
  })
  Object.keys(data[1]).forEach(el => {
    let d = data[1][el];
    delete data[1][el];
    data[1][el.replaceAll('/','-')] = d;
  })
  console.log(data);
  const tweek=[];
  const pweek=[];
  for(let i=6;i>=1;i--){
    pweek.push(getNthDay(i));
  }
  console.log(pweek);
  for(let i=1;i<7;i++){
    tweek.push(getNthDay(-i))
  }
  console.log(tweek)
  const day = new Date().getDay();
  const final = [];
  for(let i=0;i<6;i++){
    let o = {};
    o['name'] = tweek[i][1];
    o['prev week'] = data[1][pweek[i][0]] || 0;
    o['this week(pred.)'] = data[0][tweek[i][0]] || 0;
    final.push(o);
  }
  console.log(final)
  return final;
}

const Details = () => {
  const [id, setId] = useState('');
  const [loading,setLoading] = useState(false);
  const [weekLoading,setWeekLoading] = useState(false);
  const [laptop,setLaptop] = useState();
  const [weekData,setWeekData] = useState();
  const [ratings,setRatings] = useState();
  const getLaptopDetails = async () => {
     try{
      setLoading(true);
      const res = await axios.get(`http://127.0.0.1:8000/laptop-details/${id+1}`)
      const res2 = await axios.get(`http://127.0.0.1:8000/laptop-ratings/${id+1}`)
      await getWeeklyData()
      console.log(res2.data);
      console.log(res.data);
      setRatings(res2.data);
           setLoading(false);
      setLaptop(res.data);
    }catch(er){
      console.log(er);
      setLoading(false);
    }
  }
  const getWeeklyData =async () => {
    try{
      setWeekLoading(true);
      const res = await axios.get(`http://127.0.0.1:8000/order-weekbylaptop/${id+1}`);
      setWeekData(FormData(res.data));

    }catch(er){
      console.log(er);
    }
     setWeekLoading(false);
  }
  const clickHandler =(e) => {
 
    e.preventDefault();
       if(id !== ''){
            getLaptopDetails()
    // getWeeklyData();
       }

  }
  return (
    <div className="cnt2">
      <div className="cnt3">
        <div
          className="row-contain"
          style={{
            width: '33%',
            margin: 'auto',
            justifyContent: 'space-around',overflow:'visible'
          }}
        >
              <List setInd={setId} />
          <button
            type="submit"
            className="butt solid"
            style={{ margin: 'auto' }}
            onClick={clickHandler}
          >
            search
          </button>
        </div>
       {loading?<Spinner /> : null}
       {laptop && !loading?<div>
                 <Card
                   data={laptop}
                   ratings={ratings}
                 />
               </div>:null}
        
    
        {weekData && laptop && !loading ? <LineGraph data={weekData} name={laptop.name} />:null}
      </div>
    </div>
  );
};

export default Details;
