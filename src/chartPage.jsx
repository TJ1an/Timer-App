import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChartComponent from './chartComponent';
import './App.css';


function ChartPage() {
  const navigate = useNavigate();
  function handleBack() {
    navigate('/');
  }


  return (
    <>
    <div style={{display:'flex',width:'100%',height:'100%'}}>
      <div>
        <button className='backButton' onClick={handleBack}>
          Back
        </button>
      </div>
      <div style={{width:'60%',justifyContent:'center',alignContent:'center',display:'flex',margin:'100px auto'}}>
        <ChartComponent />
      </div>
    </div>
      
    </>
  );
}

export default ChartPage;