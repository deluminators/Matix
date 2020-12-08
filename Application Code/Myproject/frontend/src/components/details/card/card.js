import React,{useState} from 'react';
import Styles from './card.module.css'
import { IoIosLaptop, IoIosPlay } from 'react-icons/io';

const CourseCard = (props) => {
  // const history = useHistory();
  const {data,ratings} = props;
  const [show, setShow] = useState(false);
  return (
    

    <div
      className={Styles.outercontainer}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => {
        // history.push(`/intro/${props.id}`);
      }}
    >
      <div className={Styles.image}>
        <img
          alt="Laptop "
          src={data.link}
          style={{ height: '100%', margin: 'auto' }}
        />
     
      </div>
      <div className={Styles.innercontainer}>
        <div className={Styles.contain}>
          <div className={Styles.head}>
            <IoIosLaptop color="grey" size={25} />
            <div style={{ marginLeft: 10 ,fontWeight:'bold',fontSize:'large'}}>{data.name.toUpperCase()}</div>
          </div>
        
          <div  style={{display:'flex',marginTop:'10px' }}>
           Step 1 :  <span style={{color:'red',fontWeight:'bold',letterSpacing:4}}>{data['step1']}</span> hours
          </div>
           <div  style={{display:'flex',marginTop:'5px' }}>
           Step 2 :  <span style={{color:'red',fontWeight:'bold',letterSpacing:4}}>{data['step2']}</span> hours
          </div>
           <div  style={{display:'flex',marginTop:'5px'  }}>
           Step 3 :  <span style={{color:'red',fontWeight:'bold',letterSpacing:4}}>{data['step3']}</span> hours
          </div>
           <div  style={{display:'flex',marginTop:'5px'  }}>
           Total  :  <span style={{color:'red',fontWeight:'bold',letterSpacing:4}}>{data['totalTime']}</span> hours
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div style={{textAlign:'left'}}>
        <div>Price : {ratings[0]}</div>
        <div>Vying Price : {ratings[2]}</div></div>
      
      <div style={{textAlign:'left'}}>
        <div>Rating : {ratings[1]}/5</div>
        <div>Vying Rating : {ratings[3]}/5</div>
      </div>
      </div></div>
    </div>  );
};

export default CourseCard;