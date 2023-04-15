import React, { useContext, useEffect, useState } from 'react'
import "./showPicture.css"
import { useSelector } from 'react-redux';
import { AppContext } from '../ContextApi/ContextProvider';


export default function ShowPicture() {
  const { event } = useContext(AppContext);

  const [eventData, setevntData] = useState();
  const [keys, setKeys] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => {
        
         
       setevntData(data[event]);
        // console.log(data[event]);
      });
  }, [event]);
  
  const handleEventClick = () => {
    if (event) {
      const keys = Object.keys(eventData);
      setKeys(keys);
      
    }  
  }
  useEffect(() => {
    handleEventClick();
  },[eventData])
  console.log(eventData);
  const handleTypeFunc = (el) => {
    setDataToShow(eventData[el])
    console.log(dataToShow)
  }

 
  return (
    <div>
      <div className="pic_cata">{keys.map((el,ind) => {
        return (
          <p onClick={()=>handleTypeFunc(el)} id="sec_nav">
            {el}
          </p>
        );
       })}</div>
      <hr />
      <h1>Highlights</h1>
      <div className="pic_div">{dataToShow.map((el) => {
        return <img src={el.image} alt="" />
      })}</div> 
    </div>
  );
}
